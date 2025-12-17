import { JSDOM } from 'jsdom';

function imageOptimizationRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const report: string[] = [];
    const images = dom.window.document.querySelectorAll('img');

    let missingWidth = 0;
    let missingHeight = 0;
    let missingBothDimensions = 0;
    let missingLazyLoading = 0;
    let modernFormatCount = 0;
    let totalImages = images.length;

    images.forEach((img, index) => {
      const hasWidth = img.hasAttribute('width');
      const hasHeight = img.hasAttribute('height');
      const hasLazyLoading = img.getAttribute('loading') === 'lazy';
      const src = img.getAttribute('src') || '';

      // Check for width and height attributes (prevents layout shift)
      if (!hasWidth && !hasHeight) {
        missingBothDimensions++;
      } else if (!hasWidth) {
        missingWidth++;
      } else if (!hasHeight) {
        missingHeight++;
      }

      // Check for lazy loading (warn for images that might be below the fold)
      // We assume images after the first 2-3 are likely below the fold
      if (index > 2 && !hasLazyLoading) {
        missingLazyLoading++;
      }

      // Check for modern image formats (webp, avif)
      if (src.match(/\.(webp|avif)$/i)) {
        modernFormatCount++;
      }
    });

    // Report missing dimensions (prevents layout shift)
    if (missingBothDimensions > 0) {
      report.push(
        `There are ${missingBothDimensions} <img> tags without width and height attributes (can cause layout shift)`
      );
    }
    if (missingWidth > 0) {
      report.push(
        `There are ${missingWidth} <img> tags without a width attribute (can cause layout shift)`
      );
    }
    if (missingHeight > 0) {
      report.push(
        `There are ${missingHeight} <img> tags without a height attribute (can cause layout shift)`
      );
    }

    // Report missing lazy loading (warning)
    if (missingLazyLoading > 0) {
      report.push(
        `Consider adding loading="lazy" to ${missingLazyLoading} images that appear to be below the fold`
      );
    }

    // Informational: modern format usage
    if (totalImages > 0) {
      const modernFormatPercentage = Math.round(
        (modernFormatCount / totalImages) * 100
      );
      if (modernFormatPercentage < 50 && totalImages > 5) {
        report.push(
          `Only ${modernFormatPercentage}% of images use modern formats (WebP/AVIF). Consider using modern formats for better performance`
        );
      } else if (modernFormatCount > 0) {
        report.push(
          `Good: ${modernFormatPercentage}% of images use modern formats (WebP/AVIF)`
        );
      }
    }

    resolve(report);
  });
}

export default imageOptimizationRule;
