import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../fake-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']

})

export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;

/*   employee: Employee = {
    id: 1,
    name: 'George The Norge',
    job: 'Triangularist'
  }; */

  employees = EMPLOYEES;


  constructor() { }

  ngOnInit(): void {
  }

onSelect(employee: Employee): void {

  const detailsBox = document.getElementsByClassName('detailsBox')[0];

  this.selectedEmployee = employee;
  detailsBox.classList.add('visiblebox');
  detailsBox.classList.remove('visiblebox');
}

/* onDblClick(employee: Employee): void {
  this.selectedEmployee = employee;
} */

}
