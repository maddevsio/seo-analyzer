# SEO анализатор - библиотека для поиска SEO ошибок

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Preview](preview.png)

SEO анализатор это инструмент, который поможет отлавливать SEO дефекты на разных стадиях разработки. Основная задача — анализ DOM дерева с целью обнаружения SEO дефектов.

## Переводы документации

- [English](./README.md)
- Russian

## Преимущества этого плагина

- Простая настройка.
- Добавление собственных правил.
- 6 готовых и популярных правил.
- Запуск анализатора для SSR приложений.
- Запуск анализатора для SPA приложений.
- Запуск анализатора в конвейерах (github, gitlab, ...), pre-push и т.д.
- Несколько вариантов вывода результата.

## Почему вам следует использовать Seo Analyzer?

- **Экономит время:** избавит вас от ручного поиска проблем, которые влияют на поисковую оптимизацию.
- **Seo Friendly:** держит ваш проект валидным и дружелюбным к поисковым роботам путём обнаружения дефектов на страницах вашего сайта.
- **Это бесплатно:** мы рады поделиться результатами своей работы.

## Используйте как CLI

Для использования SEO анализатора в консоли необходимо установить плагин глобально.

```sh
npm install -g seo-analyzer
```

### Информация о параметрах

```sh
seo-analyzer -h
```

| Option | Args | Description |
| --- | --- | --- |
| -h, --help | null | Показать справку. |
| -v, --version | null | **Display Application Version:** Выводит информацию о текущей версии программы. |
| -iu, --ignoreUrls | [array] | **Exclude Specific URLs from Analysis:** Исключает определенные URL из анализа для предотвращения обработки нежелательных веб-страниц. |
| -if, --ignoreFiles | [array] | **Exclude Specific Files from Analysis:** Позволяет исключить из анализа определенные файлы, предотвращая их обработку. |
| -ifl, --ignoreFolders | [array] | **Exclude Specific Folders from Analysis:** Исключает указанные папки из процесса анализа, игнорируя все файлы внутри этих папок. |
| -u, --urls | [array] | **Perform SEO Analysis on Specified URLs:** Выполняет SEO-анализ для указанных URL-адресов, проверяя их на соответствие определенным SEO-критериям. |
| -f, --files | [array] | **Perform SEO Analysis on Specified Files:** Производит анализ SEO для указанных файлов, обеспечивая их соответствие стандартам и правилам оптимизации. |
| -fl, --folder | [array] | **Perform SEO Analysis on Specified Folders:** Анализирует все файлы в указанных папках на предмет соответствия SEO-правилам и рекомендациям. |
| -r, --rules | [array] | **Apply Specific SEO Rules for Analysis:** Применяет определенные правила SEO при анализе, позволяя пользователю кастомизировать процесс проверки. Поумолчанию запускаются все дефолтные правила. |

#### Пример использования с множеством url

```sh
seo-analyzer -u https://maddevs.io https://maddevs.io/blog
```

#### Пример использования правил

```sh
seo-analyzer -u https://maddevs.io -r titleLengthRule='{ "min": "500" }'
```

Для передачи параметров в правилах используйте json формат.

## Используйте как github-action

Чтобы использовать SEO-анализатор как github-action, вам нужно создать файл в папке .github/workflows/analyzer.yml со следующим содержанием:

```yml
name: SEO analyzer

on: [push]

jobs:
  seo-analyzer:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - run: npm i -g seo-analyzer
      - run: seo-analyzer -u https://maddevs.io
```

На последнем шаге вы можете указать url, который хотите проанализировать.

## Используйте как API

Устанавливаем плагин в ваш проект

```sh
npm install -D seo-analyzer
```

## Применение

### Начало

Настройка SEO анализатора максимально проста. Выглядеть она будет примерно так:

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(<array>)
  .addRule(<function>)
  .addRule(<function>)
  .outputConsole()
  .run();
```

Далее покажу несколько примеров.

#### Способ №1: анализ url-адресов и вывод отчета в консоль

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputUrls(['https://maddevs.io', 'https://maddevs.io/blog'])
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole()
  .run();
```

#### Способ №2: анализ страниц для SPA приложения и вывод отчета в консоль

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreUrls(['/404', '/login'])
  .inputSpaFolder('/dist', 'sitemap.xml', 3000)
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole()
  .run();
```

#### Способ №3: анализ список HTML-файлов и вывод отчета в консоль

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFiles(['index.html', 'about.html'])
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole()
  .run();
```

#### Способ №4: анализ папок с HTML-файлами и вывод отчета в консоль

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole()
  .run();
```

#### Способ №5: анализ папок с HTML-файлами и вывод отчета в виде JSON

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputJson(json => console.log(json))
  .run();
```

#### Способ №6: игнорировать подпапку "test" и 404.html в папке "src" и вернуть объект js

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFolders(['src/test'])
  .ignoreFiles(['src/404.html'])
  .inputFolders(['dist', 'src'])
  .addRule('imgTagWithAltAttributeRule')
  .outputObject(obj => console.log(obj))
  .run();
```

#### Способ №7: Ввод HTML-строки напрямую и вывод отчета в консоль

```js
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputHTMLString(
    '<!DOCTYPE html><html><body><h1>title</h1><p>content</p></body></html>'
  )
  .addRule('imgTagWithAltAttributeRule')
  .outputConsole()
  .run();
```

## Доступные методы:

| Метод | Параметры | Описание |
| --- | --- | --- |
| ignoreFiles | ['dist/about.html'] | Массив файлов, которые будут проигнорированны во время анализа. |
| ignoreFolders | ['dist/ignore'] | Массив папок с файлами, которые будут проигнорированны во время анализа. |
| ignoreUrls | ['/404'] | Массив URL-адресов, которые будут проигнорированны во время анализа. |
| inputFiles | ['dist/index.html'] | Массив файлов, которые нужно анализировать. |
| inputUrls | ['https://maddevs.io'] | Массив URL-адресов, которые нужно анализировать. |
| inputFolders | ['dist', 'src'] | Массив папкок с файлами, которые нужно анализировать. |
| inputSpaFolder | '/dist', 'sitemap.xml', 3000 | Метод для запуска анализаторв для SPA приложений. Ожидает папку с финальными кодом приложения и порт на котором запустится анализатор. |
| inputHTMLString | ['<html>example</html>'] | Этот метод ожидает строку, содержащую HTML. |
| addRule | function(dom) {} | Метод для добавления встроенных правил или собственных. |
| outputObject | function(obj) {} | Метод для вывода результата. Вернёт js объект. |
| outputJson | function(json) {} | Метод для вывода результата. Вернёт JSON. |
| outputConsole | null | Метод для вывода результата. Вернёт результат в консоль. Использовать только в самом конце цепочки, потому что он завершает процесс и цепочка методов ниже не сработает |

## Список правил, доступных по умолчанию

Ниже приведены правила, которые выполняются для каждого файла передаваемого в Seo Analyzer. По умолчанию они отключены и должны быть добавлены.

### Правило длины заголовка

Проверяет длину тега `<title>`. Принимаются два параметра:

- **min:** минимальная длина заголовка
- **max:** максимальная длина заголовка

```js
.addRule('titleLengthRule', { min: 10, max: 50 })
```

### Правило теги Img с атрибутом Alt

Проверяет, все ли теги `<img>` имеют текст в атрибуте `alt=""`.

```js
.addRule('imgTagWithAltAttributeRule')
```

### `<a>` Правило тега `<a>` с атрибутом Rel

Проверяет, все ли теги `<a>` имеют атрибут `rel=""`

```js
.addRule('aTagWithRelAttributeRule')
```

### Правило метаданных

Проверяет, присутствуют ли на странице указанные **базовые** мета-теги. Принимает один параметр:

- **list:** список необходимых метатегов

```js
.addRule('metaBaseRule', { list: ['description', 'viewport'] })
```

### Правило мета-тегов для социальных сетей

Проверяет, присутствуют ли на странице указанные **социальные** мета-теги. Принимает один параметр:

- **properties:** список необходимых мета-тегов

```js
.addRule('metaSocialRule', {
  properties: [
    'og:url',
    'og:type',
    'og:site_name',
    'og:title',
    'og:description',
    'og:image',
    'og:image:width',
    'og:image:height',
    'twitter:card',
    'twitter:text:title',
    'twitter:description',
    'twitter:image:src',
    'twitter:url'
  ],
})
```

### Правило канонической ссылки

Проверяет, существует ли на странице каноническая ссылка.

```js
.addRule('canonicalLinkRule')
```

### Добавить собственное правило

Пользовательское правило - это всего лишь функция, которая принимает один аргумент в виде DOM дерева.

```js
function customRule(dom) {
  return new Promise(async (resolve, reject) => {
    const paragraph = dom.window.document.querySelector('p');
    if (paragraph) {
      resolve('');
    } else {
      reject('Not found <p> tags');
    }
  });
}

...
.addRule(customRule)
...
```

## Лицензирование

Лицензия MIT

Авторское право (c) 2024 Mad Devs

Настоящим предоставляется бесплатное разрешение любому лицу, получившему копию этого программного обеспечения и связанных файлов документации («Программное обеспечение»), на работу с Программным обеспечением без ограничений, включая, помимо прочего, права на использование, копирование, изменение, объединение, публикацию, распространение, сублицензирование и/или продажу копии Программного обеспечения и разрешение лицам, которым предоставляется Программное обеспечение, делать это при соблюдении следующих условий:

Вышеупомянутое уведомление об авторских правах и это уведомление о разрешении должны быть включены во все копии или существенные части Программного обеспечения.

ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ГАРАНТИИ КОММЕРЧЕСКОЙ ПРИГОДНОСТИ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ И НЕЗАЩИТЫ ОТ ПРАКТИКИ. НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ АВТОРЫ ИЛИ ВЛАДЕЛЬЦЫ АВТОРСКИХ ПРАВ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ ПРЕТЕНЗИИ, УБЫТКИ ИЛИ ДРУГИЕ ОТВЕТСТВЕННОСТИ, КОТОРЫЕ ВОЗНИКЛИ В РЕЗУЛЬТАТЕ ДОГОВОРА, ПРАКТИЧЕСКИХ ПРАВ ИЛИ ИНЫХ СЛУЧАЕВ, ВНУТРИ ИЛИ В СВЯЗИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ИЛИ ДРУГИМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.
