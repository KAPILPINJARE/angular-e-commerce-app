import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    templateUrl: "./customer-login.component.html"
})
export class CustomerLoginComponent implements OnInit {

    customer: Customer;

    constructor(private customerService: CustomerService, private router: Router) { }

    ngOnInit() {
        console.log("OnInit is called.");
        this.customer = new Customer();
    }

    onSubmit() {
        this.customerService.authenticate(this.customer).subscribe((data) => {
                alert("Login successful.");
                this.router.navigate(["books/programming"]);
        },
        (error) => {
             alert("Invalid username or password");
             this.customer.emailId = "";
             this.customer.password = "";
        } );
    }

} 