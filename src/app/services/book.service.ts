import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class BookService {

api="http://localhost/book-api/";

constructor(private http:HttpClient){}

getBooks(){
return this.http.get(this.api+"get_books.php");
}

addBook(data:any){
return this.http.post("http://localhost/book-api/add_book.php",data);
}

deleteBook(id:number){
  return this.http.get("http://localhost/book-api/delete.php?id=" + id);
}

updateBook(data:any){
return this.http.post(this.api+"update_book.php",data);
}

register(data:any){
return this.http.post("http://localhost/book-api/register.php",data);
}

login(data:any){
return this.http.post(this.api+"login.php",data);
}

}