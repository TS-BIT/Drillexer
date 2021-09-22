import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {title: `Adidas`, count: 150, pricePerUnitInDollars: 150.79, currency: "USD"},
    {title: `Puma`, count: 200 , pricePerUnitInDollars: 150.69, currency: "EUR"},
    {title: `Nike`, count: 180, pricePerUnitInDollars: 150.49, currency: "EUR"},
    {title: `Camel`, count: 180, pricePerUnitInDollars: 150.29, currency: "EUR"},
    {title: `Karimor`, count: 109, pricePerUnitInDollars: 109.29, currency: "EUR"},
    {title: `Kangaroos`, count: 99, pricePerUnitInDollars: 99.29, currency: "EUR"}
  ]

 constructor() { }
 getProducts(): Product[] {
   return this.products;
 }

}
