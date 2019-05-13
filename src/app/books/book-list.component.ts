import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: "book-list",
    templateUrl: "./book-list.component.html"   
})
export class BookListComponent implements OnInit {

  books: Book[];  
  constructor(private bookService: BookService, 
                    private route: ActivatedRoute) { }

  ngOnInit(): void {
      // First we need to read route parameter i.e category

      this.route.paramMap.subscribe((map: ParamMap) => {
          let category = map.get("category");
          console.log(category);
         
          // Call the service method findBooksByCategory() and pass
          // category as a parameter.

         this.bookService.findBooksByCategory(category) 
               .subscribe((data) => {
                   this.books = data;
               });
      });

  }


    
    // books = [
    //     {
    //         "bookId": 101,
    //         "imageUrl": "assets/images/her_last_wish.jpeg",
    //         "bookName": "Her Last Wish",
    //         "bookPrice": 250,
    //         "bookRating": 3.2,
    //         "bookCategory": "Biographies"
    //     },
    //     {
    //         "bookId": 102,
    //         "imageUrl": "assets/images/lifes_amazing_secrets.jpeg",
    //         "bookName": "Lifes Amazing Secrets",
    //         "bookPrice": 300,
    //         "bookRating": 4,
    //         "bookCategory": "Biographies"
    //     },
    //     {
    //         "bookId": 103,
    //         "imageUrl": "assets/images/secret_of_nagas.jpeg",
    //         "bookName": "Secret of Nagas",
    //         "bookPrice": 400,
    //         "bookRating": 4.9,
    //         "bookCategory": "Biographies"
    //     }
    // ];
    
}