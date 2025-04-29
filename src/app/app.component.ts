import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";
import { HeaderComponent } from "./common/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management';
}
