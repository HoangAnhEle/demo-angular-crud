import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IApiRespone, ICustomers } from '../interface/demo.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer():Observable<ICustomers[]>{
    return this.http.get<ICustomers[]>("https://server-deployment-yvii.onrender.com/todo");
  }

  createCustomer(customer: Omit<ICustomers,"id">):Observable<IApiRespone>{
    return this.http.post<IApiRespone>("https://server-deployment-yvii.onrender.com/todo", customer);
  }

  updateCustomer(id:number, customer: Omit<ICustomers, "id">): Observable<IApiRespone>{
    return this.http.put<IApiRespone>("https://server-deployment-yvii.onrender.com/todo/" + id, customer);
  }

  deleteCustomer(id:number): Observable<any> {
    return this.http.delete<any>("https://server-deployment-yvii.onrender.com/todo/" + id);
  }
}
