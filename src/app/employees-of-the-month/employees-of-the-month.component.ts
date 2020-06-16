import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-of-the-month',
  templateUrl: './employees-of-the-month.component.html',
  styleUrls: ['./employees-of-the-month.component.scss']
})
export class EmployeesOfTheMonthComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1, 5));
  }

}
