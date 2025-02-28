# ChangeDetectionDeepDive

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

## How angular change detaction works?

if we click button then angular has one third party library (zone.js)  and that library run all template  and binding from the root and if there is any change detect from previous and current value then angular change that value with new value so it's recommend that do not use getter property for heavy task or expensive calculation because it's effect on performance

## what should we have to avoid to write inside the getter function?

getter function should be simple. not use pipe and all.

## why we have to avoid pipe inside the getter function?

pipe is also function which is automatically called by Angular DI so whenever changedetction cycle run at that time getter function called and from the getter function pipe also called even if value is not changes which lead performance issues. so avoid this mistake we should not use pipe inside getter method.

if we use pipe in getter method then it also generate error
Use pipes inside templates whenever possible.
If you must use a pipe in TypeScript, inject it properly.
Avoid using pipes in getter methods to prevent performance issues due to excessive function calls.

## Why does it cause an error?

Pipes are designed for Angular templates
Pipes are meant to be used inside HTML templates to transform data dynamically. They are not functions that can be used inside TypeScript code.

Pipes require Angular dependency injection
Pipes (especially Angular's built-in ones like date, currency, etc.) are instantiated and managed by Angular's dependency injection system. Calling them inside a getter method bypasses Angular's control, leading to errors.s

Getter methods should be pure

Angular calls getter methods multiple times when detecting changes.

If a pipe is used inside a getter, it may execute unnecessarily on every change detection cycle, causing performance issues.

Pipes are optimized to work inside the template with change detection strategies (like pure pipes, which execute only when inputs change). Using them inside a getter prevents Angular from optimizing this behavior.

## How Zone.js file behave with setTimeOut property

ngOnInit() {

console.log("ngOnInit() called!"); // ✅ Runs once

setTimeout(() => {

    console.log("setTimeout executed!");  // ✅ Runs once after 3 seconds

}, 3000);

}

ngOnInit() runs once when the component loads.

setTimeout() waits for 3 seconds, then executes its code only once.

It does not repeat unless explicitly called again

## runOutsideAngular

count = signal(0);

ngOnInit() {

setTimeout(() => {

this.count.set(0);// ✅ Runs once after 3 seconds

}, 3000);

this.Zone.runOutsideAngular( () => {

setTimeout(() => {

console.log("ngOnInit() called after 4 second!");

}, 4000);

}}

when component run 1st time then ngOnInit run only once and print ngOnInit called. now after 3 second count become 0 and angular change detection cycle run with this 3 scenario ( setTimeOut, HTTPRequest, user Interaction) so after 3 min count become 0 so because of setTimeOut method angular change detection cycle run form the root of application. and after 4 second it will run again and print this message ngOnInit() called after 4 second and also all template binding and all run once again but here is issue that this 4 sec timer not affect on another UI component so changedetaction cycle run unnecessarily so avoid that problem we can use this.zone.runOutsideAngular method so that angular only run that setTimeoutfunction without run changedetaction cycle.

## onPush Strategy

What is OnPush Change Detection Strategy in Angular?
By default, Angular uses "Check Always" strategy, meaning it checks for changes in the entire component tree on every event (e.g., user input, async calls, timers). This can hurt performance in large applications.

✅ OnPush strategy improves performance by limiting when Angular runs change detection.

How to Enable OnPush?
You set OnPush in the @Component decorator:

typescript
CopyEditimport { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
selector: 'app-example',
template: `<p>{{ message }}</p>`,
changeDetection: ChangeDetectionStrategy.OnPush // ✅ Enabling OnPush
})
export class ExampleComponent {
message = "Initial Message";
}

How Does OnPush Work?
With OnPush, Angular only runs change detection when:

A new reference is assigned to an @Input() property.

An event occurs inside the component and it's child component (e.g., a button click).

An observable emits a new value (async pipe in the template).

Manually triggering change detection (ChangeDetectorRef.markForCheck()).

🚫 It does NOT detect changes to object properties or primitive values unless a new reference is assigned!

Meaning of "It does NOT detect changes to object properties or primitive values unless a new reference is assigned!"
When using ChangeDetectionStrategy.OnPush, Angular only checks for changes when an object reference changes (not when just a property inside the object changes).

🔹 Primitive Values vs. Object Properties
Primitives (like string, number, boolean) are compared by value.

Objects/arrays are compared by reference.

With OnPush, Angular only triggers change detection when an input property gets a new reference, not when an existing object's property is modified.
Example: Why OnPush Does NOT Detect Property Changes?

@Component({

selector: 'app-child',

template: `<p>{{ data.message }}</p>`,

changeDetection: ChangeDetectionStrategy.OnPush

})

export class ChildComponent {

@Input() data!: { message: string };

}

parent.html

<app-child [data]="parentData"></app-child>

<button (click)="updateMessage()">Update Message</button>

export class ParentComponent {

parentData = { message: "Hello" };

updateMessage() {

    this.parentData.message = "Updated Message";  //  Won't trigger change detection!

}

}
Why doesn’t the UI update?
parentData is the same object reference.

Changing message modifies an existing object property.

Since OnPush checks only for new object references, Angular does not detect this change.

Solution: Assign a New Object Reference
To trigger change detection with OnPush, assign a new object:

typescript
CopyEditupdateMessage() {
this.parentData = { message: "Updated Message" }; // Works! New reference triggers change detection
}
✔ Now the UI updates because parentData is a new object reference, and OnPush detects this change.
Example with Primitives
For primitive values (string, number, etc.), assigning a new value always updates the UI:

typescript
CopyEdit@Component({
selector: 'app-child',
template: `<p>{{ message }}</p>`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
@Input() message!: string;
}
html
CopyEdit<app-child [message]="text"></app-child>
<button (click)="updateText()">Update Text</button>
typescript
CopyEditexport class ParentComponent {
text = "Hello";

updateText() {
this.text = "Updated Text"; // Works! Primitives update by value
}
}
✔ Since primitives are compared by value, Angular detects the change and updates the UI
Key Takeaways
OnPush only checks for changes if a new reference is assigned.
Modifying properties inside an object does not trigger updates.
Reassigning a new object reference works (this.obj = { ...this.obj, newProp: value }).
For primitives, Angular detects value changes directly.

Best Practice: Use immutable patterns (spread operator { ... } or Object.assign()) to ensure OnPush detects changes.

## onpush with signal

if we use signal then if any changes detect then it's run as per signal change
