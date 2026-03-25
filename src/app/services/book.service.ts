import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  api = "http://localhost/AngularApp3-main/api/";

  constructor(private http: HttpClient) {}

   // Get all books from the database
getBooks(){
  return this.http.get<any[]>("http://localhost/AngularApp3-main/api/getBooks.php");
}

  // Add a new book to the database
  addBook(book:any){
    return this.http.post(this.api + "add.php", book);
  }

  // Delete a book from the database
  deleteBook(id:number){
  return this.http.get(this.api + "deleteBook.php?id=" + id);
}
}