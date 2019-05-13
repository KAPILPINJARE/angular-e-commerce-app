import { Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { CustomerProfileComponent } from './customer-profile.component';


export const customerRoutes: Routes = [
    { path: "customer/login", component: CustomerLoginComponent },
    { path: "customer/registration", component: CustomerRegistrationComponent },
    { path: "customer/editProfile", component: CustomerProfileComponent }
]