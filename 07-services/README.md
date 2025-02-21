# ServicesDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

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

## services

## read signal :

signalname()

## set signal :

signalname.set() => simple value for example set string, int value without depends on previous value then use set method

## update signal :

signalname.update => this is update the signal but it's depends on previous value and for example signalname.update((oldvalue) => oldvalue \* 3)

## compute signal :

take the value from signal and update it and store it in another variable.

## to assign signal (refereance) to another signal then use signale name without ()

## to assign signal value to another signal then use signale name with ()

## provideIn('root')

elementInjector : meaning for example in task compoent @Component({
selector: 'app-tasks',
standalone: true,
templateUrl: './tasks.component.html',
imports: [NewTaskComponent, TasksListComponent],
providers : [taskServices]
})

by this way then same instance of task services is shared for that tasks compoent and it's child components (newtaskcomponent, tasklistcomponent)
one draw back is like this task component use called from app component and with called it for 2 times then 2 time different instance of taskservices will be created for 2 instance of task component

in app.html
<app-tasks>
<app-tasks>

## element injector with services

suppose i have 2 services 1. log service and 2. task service now I want to use log service in task service then if i used provideIn = 'root' meaning same instance to be shared through out the application it's not getting any issue.

but if we use element injector like in app component provider : [logservices] then same instance of log services shared throughout the dom elements or in other words same instance is shared with app component and it's child component but it can't be used in taskservice because taskservice is not a child of appcomponent

conclusion: if we want to use services into another services then provideIn : 'root'
