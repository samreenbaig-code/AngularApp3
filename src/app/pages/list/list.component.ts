import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(){
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.getBooks().subscribe((data:any[])=>{
      console.log("DATA:", data);
      this.books = data;
    });
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(()=>{
      this.loadBooks();
    });
  }

}