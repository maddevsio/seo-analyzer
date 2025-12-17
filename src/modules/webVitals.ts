import { chromium, Browser } from 'playwright';
import Logger from './logger';

interface MetricRating {
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface WebVitalsMetrics {
  lcp: MetricRating;
  fcp: MetricRating;
  cls: MetricRating;
  ttfb: MetricRating;
}

export interface WebVitalsResult {
  url: string;
  metrics: WebVitalsMetrics;
  resourceCount: number;
  transferSize: number;
}

class WebVitals {
  logger: Logger;
  browser: Browser | null;

  constructor(logger?: Logger) {
    this.logger = logger ?? new Logger();
    this.browser = null;
  }

  /**
   * Get rating based on metric value and thresholds
   * @param {number} value - Metric value
   * @param {number} goodThreshold - Good threshold
   * @param {number} poorThreshold - Poor threshold
   * @returns {string} - Rating (good/needs-improvement/poor)
   */
  private getRating(
    value: number,
    goodThreshold: number,
    poorThreshold: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= goodThreshold) return 'good';
    if (value <= poorThreshold) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Create metric rating object
   * @param {number} value - Metric value
   * @param {number} goodThreshold - Good threshold
   * @param {number} poorThreshold - Poor threshold
   * @returns {MetricRating} - Metric with rating
   */
  private createMetricRating(
    value: number,
    goodThreshold: number,
    poorThreshold: number
  ): MetricRating {
    return {
      value,
      rating: this.getRating(value, goodThreshold, poorThreshold)
    };
  }

  /**
   * Initialize browser instance
   * @private
   */
  private async initBrowser(): Promise<void> {
    if (!this.browser) {
      this.browser = await chromium.launch({
        headless: true
      });
    }
  }

  /**
   * Close browser instance
   * @private
   */
  private async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  /**
   * Measure Core Web Vitals for a given URL
   * @param {string} url - URL to measure
   * @returns {Promise<WebVitalsResult>} - Web Vitals metrics with ratings
   */
  async measure(url: string): Promise<WebVitalsResult> {
    this.logger.info(`🚀  Measuring Web Vitals for ${url}\n`);

    try {
      await this.initBrowser();

      if (!this.browser) {
        throw new Error('Failed to initialize browser');
      }

      const context = await this.browser.newContext();
      const page = await context.newPage();

      // Set up observers before navigation
      await page.addInitScript(() => {
        (window as any).__webVitals = { lcp: 0, cls: 0, fcp: 0 };

        // LCP Observer
        new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            (window as any).__webVitals.lcp = lastEntry.startTime;
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        // CLS Observer
        new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              (window as any).__webVitals.cls += (entry as any).value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });

        // FCP Observer
        new PerformanceObserver(list => {
          const entries = list.getEntries();
          const fcp = entries.find(e => e.name === 'first-contentful-paint');
          if (fcp) {
            (window as any).__webVitals.fcp = fcp.startTime;
          }
        }).observe({ type: 'paint', buffered: true });
      });

      // Navigate to URL and wait for network idle
      await page.goto(url, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait additional 3 seconds for LCP to settle
      await page.waitForTimeout(3000);

      // Get all metrics in one evaluate call
      const metrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        const resources = performance.getEntriesByType('resource') as any[];

        return {
          // From observers
          lcp: (window as any).__webVitals?.lcp || 0,
          fcp: (window as any).__webVitals?.fcp || 0,
          cls: (window as any).__webVitals?.cls || 0,
          // TTFB from navigation timing
          ttfb: navigation?.responseStart || 0,
          // Resource metrics
          resourceCount: resources.length,
          transferSize: resources.reduce(
            (acc, r) => acc + (r.transferSize || 0),
            0
          )
        };
      });

      // Close context
      await context.close();

      // Create result with ratings based on Google's thresholds
      const result: WebVitalsResult = {
        url,
        metrics: {
          lcp: this.createMetricRating(metrics.lcp, 2500, 4000),
          fcp: this.createMetricRating(metrics.fcp, 1800, 3000),
          cls: this.createMetricRating(metrics.cls, 0.1, 0.25),
          ttfb: this.createMetricRating(metrics.ttfb, 800, 1800)
        },
        resourceCount: metrics.resourceCount,
        transferSize: metrics.transferSize
      };

      this.logger.success('✅  Web Vitals measurement completed\n');

      return result;
    } catch (error) {
      this.logger.error(`❌  Error measuring Web Vitals: ${error}`);
      throw error;
    }
  }

  /**
   * Measure multiple URLs and return results
   * @param {string[]} urls - Array of URLs to measure
   * @returns {Promise<WebVitalsResult[]>} - Array of Web Vitals results
   */
  async measureMultiple(urls: string[]): Promise<WebVitalsResult[]> {
    const results: WebVitalsResult[] = [];

    for (const url of urls) {
      try {
        const result = await this.measure(url);
        results.push(result);
      } catch (error) {
        this.logger.error(`Failed to measure ${url}: ${error}`);
      }
    }

    await this.closeBrowser();

    return results;
  }

  /**
   * Close the browser and cleanup resources
   */
  async cleanup(): Promise<void> {
    await this.closeBrowser();
  }
}

export default WebVitals;
