# Experiences

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Live Demo

The experiences application is deployed and accessible on Heroku. Please click this [Link](https://fjautisticaexperiences.herokuapp.com/) to access the app.

# Development Prerequisites

## Project installation

The Experiences project is developed using Angular and Nativescript development frameworks. Furthermore packages in the project are managed via NPM. Please install NPM onto your development computer and install the Angular and Nativescript CLIs:

npm install -g angular-cli
npm install -g nativescript

## Mobile and Web code sharing

Before you can start code sharing, we need to know how to separate the web code from the mobile code. This is important, so that we could easily create platform-specific code without creating conflicts.

To do that we can use a simple naming convention. By adding a .tns before the file extension, you can indicate that this file is NativeScript-specific, while the same file without the .tns extension is marked as web-specific. If we have just one file without the .tns extension, then this makes it a shared file.


This is further discussed [here](https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7)


## Development server (Web view)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploying/Debugging to mobile

iOS deploy using Nativescript: tns run ios --bundle

Android deploy using Nativescript: tns run android --bundle

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
