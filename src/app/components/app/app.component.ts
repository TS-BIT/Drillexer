import { ProductComponent } from './../product/product.component';
import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Product } from './../models/product';

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


<!-- <div class="calculator">

  <input type="text" class="calculator-screen" [value]="currentNumber" disabled />

  <div class="calculator-keys">



    <button type="button" (click) = "getNumber('7')" value="7">7</button>
    <button type="button" (click) = "getNumber('8')" value="8">8</button>
    <button type="button" (click) = "getNumber('9')" value="9">9</button>


    <button type="button" (click) = "getNumber('4')" value="4">4</button>
    <button type="button" (click) = "getNumber('5')" value="5">5</button>
    <button type="button" (click) = "getNumber('6')" value="6">6</button>


    <button type="button" (click) = "getNumber('1')" value="1">1</button>
    <button type="button" (click) = "getNumber('2')" value="2">2</button>
    <button type="button" (click) = "getNumber('3')" value="3">3</button>


    <button type="button" (click) = "getNumber('0')" value="0">0</button>

  </div>
</div>

<div class="calculator-keys">

    <button type="button" (click) = "getOperation('+')" class="operator" value="+">+</button>
    <button type="button" (click) = "getOperation('-')" class="operator" value="-">-</button>
    <button type="button" (click) = "getOperation('*')" class="operator" value="*">&times;</button>
    <button type="button" (click) = "getOperation('/')" class="operator" value="/">&divide;</button>

       <button type="button" (click) = "getDecimal()" class="decimal" value=".">.</button>
    <button type="button" (click) = "clear()"  class="all-clear" value="all-clear">AC</button>

    <button type="button" (click) = "getOperation('=')" class="equal-sign" value="=">=</button>

  </div> -->




<hr />





<h2>DIRECTIVES</h2>

<hr>


<h3>Lets show a message  to the user after he presses a button</h3>
<!-- <p>This a message that will be show after clicking the button</p> -->
<p *ngIf="isMessageShow">This is This a message that will be show after clicking the button</p>
<button (click)="toggleMessage()" class="btn btn-warning">{{ buttonText }}</button>
<br>
<br>

<label>Filter:</label>
<!-- <input type="text" (input)="onFilter($any($event.target).value)"> -->
<input type="text" (input)="onFilter($event)">

<h4>Let's print a table</h4>


<!-- <h4>Let print a table</h4> -->

<!-- <table class="table" *ngIf="products.length !==0"> -->
<table *ngIf="products.length > 0; else noProductsWarning" class="table" >

<tr>
  <th>Title</th>
  <th>Count</th>
  <th>Price per unit</th>
</tr>

<tbody>
<tr *ngFor="let product of filteredProducts">

<td>{{ product.title | lowercase }}</td>
<td>{{ product.count }}</td>
<td>{{ product.pricePerUnitInDollars | currency: product.currency : 'symbol' : '1.2-2' }}</td>

</tr>

</tbody>

</table>

<ng-template #noProductsWarning>
      <p class="alert alert-warning">No data!</p>
      </ng-template>




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

products: Product[] = [
  {title: `Adidas`, count: 150, pricePerUnitInDollars: 150.79, currency: "USD"},
  {title: `Puma`, count: 200 , pricePerUnitInDollars: 150.69, currency: "EUR"},
  {title: `Nike`, count: 180, pricePerUnitInDollars: 150.49, currency: "EUR"},
  {title: `Camel`, count: 180, pricePerUnitInDollars: 150.29, currency: "EUR"},
  {title: `Karimor`, count: 109, pricePerUnitInDollars: 109.29, currency: "EUR"},
  {title: `Kangaroos`, count: 99, pricePerUnitInDollars: 99.29, currency: "EUR"}
]


filteredProducts = this.products;

onFilter($event: any) {
  let s = $event.target.value.toLocaleLowerCase();
  this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().indexOf(s) != -1);

}


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


  // export class CalculatorComponent implements OnInit {

  //   currentNumber = '0';
  //   firstOperand = null;
  //   operator = null;
  //   waitForSecondNumber = false;

  //   public getNumber(v: string){
  //       console.log(v);
  //       if(this.waitForSecondNumber)
  //       {
  //         this.currentNumber = v;
  //         this.waitForSecondNumber = false;
  //       }else{
  //         this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;


  //         getDecimal(){
  //       if(!this.currentNumber.includes('.')){
  //           this.currentNumber += '.';
  //       }
  //     }

  //     private doCalculation(op , secondOp){
  //       switch (op){
  //         case '+':
  //         return this.firstOperand += secondOp;
  //         case '-':
  //         return this.firstOperand -= secondOp;
  //         case '*':
  //         return this.firstOperand *= secondOp;
  //         case '/':
  //         return this.firstOperand /= secondOp;
  //         case '=':
  //         return secondOp;
  //       }
  //     }

  //     public getOperation(op: string){
  //       console.log(op);

  //       if(this.firstOperand === null){
  //         this.firstOperand = Number(this.currentNumber);

  //       }else if(this.operator){
  //         const result = this.doCalculation(this.operator , Number(this.currentNumber))
  //         this.currentNumber = String(result);
  //         this.firstOperand = result;
  //       }
  //       this.operator = op;
  //       this.waitForSecondNumber = true;

  //       console.log(this.firstOperand);

  //     }
  //     public clear(){
  //       this.currentNumber = '0';
  //       this.firstOperand = null;
  //       this.operator = null;
  //       this.waitForSecondNumber = false;
  //     }




}
