import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-list',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

books:any[] = [];

constructor(private bookService:BookService){}

ngOnInit(){

this.loadBooks();

}

loadBooks(){

this.bookService.getBooks().subscribe((data:any)=>{

console.log("DATA:",data);

this.books = data;

});

}

delete(id:number){

if(confirm("Delete this book?")){

this.bookService.deleteBook(id).subscribe(()=>{

this.loadBooks();

});

}

}

}