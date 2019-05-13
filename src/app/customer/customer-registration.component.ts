import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./customer-registration.component.html"
})
export class CustomerRegistrationComponent implements OnInit {

    customer: Customer;    

    states = ["Maharashtra", "Madhya Pradesh", "Karnataka", "Uttar Pradesh"];
    cities = ["Mumbai", "Bhopal", "Banglore", "Gurgaon"];

    constructor(private customerService: CustomerService, private router: Router) { }

    ngOnInit(): void {
        this.customer = new Customer();
        this.customer.address = new Address();
    }

    onSubmit() {

        this.customerService.registerNewCustomer(this.customer).subscribe((data) => {
            console.log(data);
            if(data != null) {
                console.log("called");
                alert("Registration successful... Please Login.");
                this.router.navigate(["customer/login"]);
            }            
        });
    }
}