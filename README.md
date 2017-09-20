# Cabinet for TV CRM

Used REST server from http://bil-2000.berdaflex.com application

REST endpoint can be configured in the /assets/server-properties.json
Default value is: 
"basePath": "http://localhost:8088/rest

This is Angular 4 based application.
Node Js required, download and install from https://nodejs.org/en/download/

Use [Angular CLI](https://github.com/angular/angular-cli) as build tool
Run install scrypt:
npm install -g @angular/cli

Open application folder and download NG modules:
npm install

Update NG CLI:
npm install --save-dev @angular/cli@latest

Visual Studio code https://code.visualstudio.com/ used as code editor

## Translation

There are EN and RU translations
 
Use translate tool:
ng xi18n --output-path src/i18n

## Development server
ng serve -o

Russian locale version:
ng serve -aot --i18n-file=src/i18n/messages.ru.xlf --locale=ru --i18n-format=xlf -o

Open http://localhost:4200

## Production build

Russian locale version:
ng build -aot --output-path=dist/ru -prod --i18n-file=src/i18n/messages.ru.xlf --i18n-format=xlf --locale=ru

Deploy generated files from dist/ru folder to any web server

Base path can be changed in the build
ng build -aot --output-path=dist/ru -prod --bh /ru/ --i18n-file=src/i18n/messages.ru.xlf --i18n-format=xlf --locale=ru


