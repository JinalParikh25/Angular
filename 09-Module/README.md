# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## What is Module?

module meaning group of components. we can create angular application with module base (group of component) and standalone components

## to work with module base application we need to add this line in main.ts file for make app module as a root module.

import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
and in app.module.ts file we need to tell angular with component work as a root component for that we need to add bootstrap:[AppComponent] in module declaration part
@NgModule({

bootstrap:[AppComponent],

})

## @NgModule({

## declarations:[AppComponent], - non-standalone component

## bootstrap:[AppComponent], - root component

## imports : [BrowserModule,HeaderComponent, UserComponent, TasksComponent] - standalone component and other Module

## })

## BrowserModule :

to run module base application correctly need to import BrowserModule and it also have another feature like pipe.

## Module means group of components so for example tasksComponent's child components [taskcomponent, newTaskComponent] so we can create one tasksModule and in that tasksModule we can in Module declaration we can use tasksComponent, taskComponent, newTaskComponent

@NgModule({
declarations : [TasksComponent, TaskComponent, NewTaskComponent],
exports : [TasksComponent]
})
export class TasksModule{

}

declarations : [TasksComponent, TaskComponent, NewTaskComponent], - child of tasksComponent which are standalone = false
exports : [TasksComponent] - from the 3 component only tasksComponent use in appcomponent so we need to export only TasksComponent not anyOther component

and at last we have this update in app.module.ts file
@NgModule({
declarations:[AppComponent,HeaderComponent,UserComponent],
bootstrap:[AppComponent],
imports : [BrowserModule, FormsModule,SharedModule, TasksModule]
})
