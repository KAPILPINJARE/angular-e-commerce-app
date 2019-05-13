import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from './book';

@Component({
    templateUrl: "./book-details.component.html"
})
export class BookDetailsComponent implements OnInit {

    book: Book;

    constructor(private route: ActivatedRoute,
                      private bookService: BookService,
                      private router: Router) { }

    ngOnInit(): void {
        
        this.route.paramMap.subscribe((map: ParamMap) => {
            let bookId = +map.get("bookId");

            this.bookService.findBookById(bookId).subscribe((data) => {
                 this.book = data; 
                 console.log(this.book);  
            }); 
        })
    }

    backPage(): void {
        this.router.navigate(["books/" + this.book.category]);
    }
}