import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',

})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEdit = false;
  employeeId: number = 0;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.employeeId;

    if (this.isEdit) {
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.employeeForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    const employeeData = this.employeeForm.value;

    if (this.isEdit) {
      this.employeeService.update(this.employeeId, employeeData).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.employeeService.create(employeeData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
