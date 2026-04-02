import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn:'root'
})

export class BookService{

apiURL = "http://localhost/book-api";

constructor(private http:HttpClient){}

getBooks(){
return this.http.get(this.apiURL+"/get_books.php");
}

addBook(data:any){
return this.http.post(this.apiURL+"/add_book.php",data);
}

deleteBook(id:number){
return this.http.get(this.apiURL+"/delete.php?id="+id);
}

updateBook(data:any){
return this.http.post(this.apiURL+"/update_book.php",data);
}

}