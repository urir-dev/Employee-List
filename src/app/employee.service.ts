import { Employee } from './employee';
import { EMPLOYEES } from './fake-employees';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

/*   getEmployees(): Employee[] {
    return EMPLOYEES;
  } */

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('Loading List...');
    return of(EMPLOYEES);
  }

  getEmployee(id: number): Observable<Employee> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`EmployeeService: Chosen Employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }

  constructor(private messageService: MessageService) { }
}
