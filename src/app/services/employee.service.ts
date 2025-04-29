import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`http://localhost:8080/employee/get-All`);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${`http://localhost:8080/employee/searchById`}/${id}`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`http://localhost:8080/employee/add`, employee);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${`http://localhost:8080/employee/update`}/${id}`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${`http://localhost:8080/employee/deleteById`}/${id}`);
  }
}
