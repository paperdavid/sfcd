#SFCD

Репозиторий для выполнения тестового задания

Компиляция и сборка осуществляется с помощью Gulp

## Требования

Для корректной работы в системе должны быть глобально установлены `bower` и `nodejs` (вместе с `npm`)

- [Установка Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via package manager")
- [Установка Bower](http://bower.io/#install-bower "Install Bower")

## Установка репозитория

``` sh
$ git clone https://github.com/paperdavid/sfcd.git app-name
$ cd app-name
$ npm i -d
$ bower install
```
## Компиляция с помощью Gulp

После установки можно запускать задачи Gulp:

# - `$ gulp watch` - запуск проекта

 - `$ gulp html` - сборка HTML проекта с использованием простейшией шаблонизации.
 - `$ gulp js` - сборка JavaScript проекта
 - `$ gulp less` - компилиция Less
 - `$ gulp images` - оптимизация изображений
 - `$ gulp svg` - оптимизация SVG
 - `$ gulp png-sprite` - создание PNG-спрайта
 - `$ gulp svg-sprite` - создание SVG-спрайта
 - `$ gulp fonts` - копирование файлов шрифтов
 - `$ gulp clean` - очистка каталога `build/`
 - `$ gulp webserver` - запуск локального веб-сервера для livereload и синхронного тестирования в разных браузерах
 - `$ gulp gh-pages`- размещение скомпилированного проекта на Github Pages
 - `$ gulp build` - полная сборка проекта
 - `$ gulp watch` - запуск задачи `webserver` и отслеживания изменений
 - `$ gulp default` - запуск задачи `watch`


 ## Общая концепция

- `src/` - каталог для размещения рабочих файлов (html-шаблоны, less-файлы, файлы и библиотки js, изображения для сборки в спрайты и т.д.)
- `build/` - каталог для размещения скомпилированной верстки
- `design/` - каталог для локального хранения файлов макета. Содержимое не отслеживается в Git и не будет в последствии залито в репозиторий