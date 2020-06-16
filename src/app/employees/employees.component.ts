import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EMPLOYEES } from '../fake-employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

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

  // employees = EMPLOYEES;
  employees: Employee[];


  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  onSelect(employee: Employee): void {

    const detailsBox = document.getElementsByClassName('detailsBox')[0];
    const listItem = document.getElementsByClassName('selected')[0];

    if (this.selectedEmployee !== employee) {

      this.messageService.add(`Selected Employee id=${employee.id}`);

      this.selectedEmployee = employee;
      detailsBox.classList.add('visiblebox');
      listItem.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

    }
    else
    {

      this.messageService.add(`Closed Employee id=${employee.id}`);

      this.selectedEmployee = null;
      detailsBox.classList.remove('visiblebox');
      listItem.classList.remove('selected');

    }

  }

  getEmployees(): void {
    // this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  goToCard(employee: Employee): void {

    console.log('got to card');
  }

/* onDblClick(employee: Employee): void {
  this.selectedEmployee = employee;
} */

}