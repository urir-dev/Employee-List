import { Employee } from './employee';
import { EMPLOYEES } from './fake-employees';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  constructor() { }
}
