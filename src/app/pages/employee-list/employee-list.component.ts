import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(data => this.employees = data);
  }

  editEmployee(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure?')) {
      this.employeeService.delete(id).subscribe(() => this.loadEmployees());
    }
  }
}

