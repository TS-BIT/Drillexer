import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: 1, title: `Adidas`, count: 150, pricePerUnitInDollars: 150.79, currency: "USD", score: 4.75},
    {id: 2, title: `Puma`, count: 200 , pricePerUnitInDollars: 150.69, currency: "EUR", score: 2.85},
    {id: 3, title: `Nike`, count: 180, pricePerUnitInDollars: 150.49, currency: "EUR", score: 3.20},
    {id: 4, title: `Camel`, count: 180, pricePerUnitInDollars: 150.29, currency: "EUR", score: 3.44},
    {id: 5, title: `Karimor`, count: 109, pricePerUnitInDollars: 109.29, currency: "EUR", score: 1.50},
    {id: 6, title: `Kangaroos`, count: 99, pricePerUnitInDollars: 99.29, currency: "EUR", score: 0.50}
  ];

 constructor() { }
 getProducts(): Product[] {
   return this.products;
 }

}
