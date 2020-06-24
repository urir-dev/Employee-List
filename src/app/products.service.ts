import { IProduct } from './products/product';
import { PRODUCTS } from './Product-list';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

/*   getEmployees(): Employee[] {
    return EMPLOYEES;
  } */

  getProducts(): Observable<IProduct[]> {
    this.messageService.add('Loading List...');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<IProduct> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`EmployeeService: Chosen product id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }

  constructor(private messageService: MessageService) { }
}
