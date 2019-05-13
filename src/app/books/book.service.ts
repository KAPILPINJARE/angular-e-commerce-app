import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
    providedIn: "root"
})
export class BookService {
    // It is dependent on HttpClient to call REST APIs over http
    // First step -> import HttpClientModule.
    // Define dependency of HttpClient

    baseUrl = "http://localhost:8000/";

    constructor(private _http: HttpClient) { }

    findBooksByCategory(category: string): Observable<Book[]> {
        return this._http.get<Book[]>(this.baseUrl + "books/" + category);
    }

    findBookById(bookId: number) : Observable<Book> {
        return this._http.get<Book>(this.baseUrl + "book/" + bookId);
    }
}