import { NgModule } from '@angular/core';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { CustomerProfileComponent } from './customer-profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CustomerLoginComponent,
        CustomerRegistrationComponent,
        CustomerProfileComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(customerRoutes)
    ]
})
export class CustomerModule {

}