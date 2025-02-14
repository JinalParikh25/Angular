# CmpDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

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

1. I have learn about how to devide componet like by using work like header and dashboard (server-status, support-ticket, traffic) UI / Componet so I have created header, server-status, support-ticket and traffic controller

2. now server-status, support-ticket,and traffic have same UI Pattern like header and main logic of that component so for that duplicate markup I have created one shared dashboard-item in the dashboard folder and by using ng-contnt and @input pass the data available in UI

3. when to use ng-conent and @Input
   for example we have this kind of code <h2> {{ title }}</h2> and <input name='title' id='title'>
   so for better apporch for h2 we can use @Input for h2 tag because it's simple and in future we will not pass or pass only one properties like class then it's simple and easy to manage by @input
   for <input> has multiple attribute name, id , class so it become lengthy to pass each and every things by @input so better way is simply use ng-conent to project that element.

4) attibute-selector and component selector like we have button more than 1 place with same but complex markup so at that time we used extend Built-in Elements because if we use component selector than it's will unnecesary wrapping outside the button so we can use attribute selector

If you are creating a new UI component, go for an element selector.

If you are modifying behavior, styling, or events of existing elements, go for an attribute selector.

5. private el = inject(ElementRef) use for get control of component programatically.

6. use of :host and host in @component()
   :host when you want to statically style the component's root element.
   Use host in @Component when you want to dynamically apply classes, attributes, or events.
   We can use :host when for example in serverstatus.html file there is one wrapper

<div id="status">

code

</div>

In CSS file there is id use for styling purpose not any other use of that div or it's extra wrapper then we delete that div(extra wrapper) and only use :host in CSS file as we use static CSS

When to Use host?
When you need to bind host element properties or classes dynamically.

When you need to listen for events on the host element.

7. conditionally applied css to the class properties in html file

8. to get from value from templateview to ts file we can have many option
   1. is ngmodule or two-way binding
   2. by using template variable #templatevariable and pass them in ngsubmit method
   3. by viewchild and contentchild
      main difference between viewchild and contentchild is that viewchild access Htmltags for example (<p>,<h1>) form it's own template not access htmltemplate (p,<h1>) from another ts file or we want to access that tag in where we used content-project(ng-conent) at that time we can use @contentchild() or if we want to access that element from another ts or html file then we have to use @contentchild decorator
