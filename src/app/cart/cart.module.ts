import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './cart.routes';


@NgModule({
    declarations: [ CartComponent ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class CartModule {

}