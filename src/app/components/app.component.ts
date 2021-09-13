import { Component } from '@angular/core';
// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
 //  styleUrls: ['./app.component.css']


template: `

<app-header></app-header>

<p>Hello world!</p>
<p>['Jonas', 'Petras', 'Liudas']</p>


<hr />

<p> 2 + 3 = {{2 + 3}}</p>
<p> title + subtitle = {{title +' '+ subtitle}}</p>
<p> firstNumber + secondNumber = {{firstNumber + secondNumber}}</p>
<p> {{counter}}</p>
<button (click)='counter = counter + 1'>Click me!</button>
<p> {{counter2}}</p>
<button (click)='clickHandler()'>Click me too!</button>

<hr />

<p> {{counter_ab}} </p>
<p> {{a}} = {{counter}} </p>
<p> {{b}} = {{counter2}} </p>
<p> a + b = {{a + b}}</p>

<button (click)='counter_ab = a + b'>Count!</button>

<hr />

<div>
<h2>DIRECTIVES</h2>

<hr>

<h3>Lets show a message  to the user after he presses a button</h3>
<!-- <p>This a message that will be show after clicking the button</p> -->
<p *ngIf="isMessageShow">This is This a message that will be show after clicking the button</p>
<button (click)="toggleMessage()" class="btn btn-warning">{{ buttonText }}</button>
<br>
<br>

<h4>Let print a table</h4>

<table class="table" *ngIf="products.length !==0">
<tr>
  <th>Title</th>
  <th>Count</th>
  <th>Price per unit</th>
</tr>

<tbody>
<tr *ngFor="let product of products">

<td>{{ product.title | lowercase }}</td>
<td>{{ product.count }}</td>
<td>{{ product.pricePerUnitInDollars | currency: product.currency : 'symbol' : '1.2-2' }}</td>

</tr>

</tbody>

</table>

</div>

<hr />
<!-- Dvikryptis
<input {(ngModel)}='text'>
<p>{{ text }}</p> -->

<hr />

<!-- 2 vienkrypciai
<input (input)='userInput($event)' [value]='text'>
<p>{{ text }}</p> -->

`,

styles: ['p {color: green;}', 'p {background-color: pink;}', 'p {align: center}'],

})

export class AppComponent {
  title = 'Drillexer';
  subtitle = 'project';

  firstNumber = 4;
  secondNumber = 5;
  text = `Placeholder text`;

  counter = 0;
  counter2 = 0;
  clickHandler() {
    this.counter2++;
  }
a = 0;
b = 0;
counter_ab = 0;

isMessageShow = false;
buttonText = 'Click to see the message';
toggleMessage() {
  if(this.isMessageShow) {
    this.isMessageShow = false;
    this.buttonText = 'Click to see the message'
  } else {
    this.isMessageShow = true;
    this.buttonText = 'Click to hide the message'
  }
}
showMessage () {
  this.isMessageShow = !this.isMessageShow;
}

products = [
{ title: "Adidas", count: 150, pricePerUnitInDollars: 150.79, currency: "USD"},
{ title: "Puma", count: 200 , pricePerUnitInDollars: 150.69, currency: "EUR"},
{ title: "Nike", count: 180, pricePerUnitInDollars: 150.49, currency: "EUR"}
]



// userInput($event: Event) {
//   this.text = (<HTMLTextAreaElement>$event.target).value;
// }
// clickHandler() {
//   this.counter2++;
// }

  mouseX = 0;
  mouseY = 0;
  // mouseMoveHandler($mouseEvent)
  // this.mouseX$event
  // this.mouse.Y$event

}
