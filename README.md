### Generate new Component

```
  ng g c box
```


## Directives

Directives are custom Elements and attributes created in Angular

There are three kinds of Directives

* Component Directive
* Attribute Directive
* Structural Directive

#### Component Directive

   Custom elements
   Component that we create - Component Directives

#### Attribute Directives
    Custom attributes that we apply for both html elements and components
    It is further classified into three categories
* Input Directive
 
   * Input directives changes the behavior of the target element
   * These directives may change CSS or data related to the target element
   * Input directives need to be enclosed within [] ,but it is not mandatory
       
       <h1 myAttrib="x">
       <h1 [myAttrib]="x">



    * in case angular consider x as a string
* Output Directive

   * Output Directives are  Event listener
   * It calls the function that is mentioned as value for the directive by
   passing the event
   * we typically enclose the output directives with ()

   all the events are available in angular in the form of output attributes
   click,hover,keyup,mouseover

* Input Output Directive
  * Does the job of both input and output
  * should be enclose in [()]
#### Structural Directives

  Structural directs either generates template or Hides/unhides template
  All Structural directives are prefixed  with *

  *ngFor it generates html
```
     <li *ngFor="let x in [0,1,2,3]"></li>

       <li> 0 </li>
       <li> 1 </li>
       <li> 2 </li>
       <li> 3 </li>

```
if show=true

```
<div class="sample" *ngIf="show"></div>
```


## Parent to Child Component Communication

### @Input and @Output

* Parent to Childd ---> @Input
* Child to Parent --> @Output

#### Parent to child Communication

   * Child needs to receive the data
   * The receiving variable needs to be annotated with @Input
   * That receiving variable will become an input attribute directive
   for the child Component

