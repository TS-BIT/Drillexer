import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
@Input() rating = 0;
width = 0;

// rating = 2.75;
// width = (75 / 5) * this.rating;

  constructor() { }
ngOnChanges(changes: SimpleChanges): void {
  this.width = (75 / 5) * this.rating;
}
  ngOnInit(): void {
  }

}
