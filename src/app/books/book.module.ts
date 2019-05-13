import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [ 
        BookListComponent, 
        BookDetailsComponent 
    ],
    imports: [ 
        RouterModule.forChild(bookRoutes),
        SharedModule
     ]
})
export class BookModule {

}