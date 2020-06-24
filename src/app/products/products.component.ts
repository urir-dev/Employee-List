import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { MessageService } from '../message.service';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: IProduct[] = [];
    constructor(private productService: ProductService) { }
    ngOnInit(): void {
      this.getProducts();
    }
    getProducts(): void {
      this.productService.getProducts()
        .subscribe(products => this.products = products);
    }
}
