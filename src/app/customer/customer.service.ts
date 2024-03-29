import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CustomerService {

    baseUrl = "http://localhost:8000/"

    constructor(private _http: HttpClient) { }

    registerNewCustomer(customer: Customer): Observable<Customer> {
        return this._http.post<Customer>(this.baseUrl + "customers", customer);
    }

    authenticate(customer: Customer): Observable<Customer> {
        return this._http.post<Customer>(this.baseUrl + "customers/login", customer);
    }

}