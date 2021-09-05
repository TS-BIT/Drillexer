import { Component } from '@angular/core';

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
`,

styles: ['p {color: green;}', ' '],


})

export class AppComponent {
  title = 'Drillexer';
  subtitle = 'project';

  firstNumber = 4;
  secondNumber = 5;

  counter = 0;
  counter2 = 0;
  clickHandler() {
    this.counter2++;
  }

}
