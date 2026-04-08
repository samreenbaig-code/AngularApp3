import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-list',
standalone: true,
imports: [CommonModule, RouterModule, FormsModule],
templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

books:any[] = [];

searchText:string = "";

currentPage:number = 1;   // FIX
itemsPerPage:number = 5;  // FIX

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