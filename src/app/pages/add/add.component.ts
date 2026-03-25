import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,  } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add.component.html'
})
export class AddComponent {

  book = {
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService,
              private router: Router) {}

  addBook(){
  this.bookService.addBook(this.book).subscribe(()=>{
    alert("Book added successfully 🎉");
    this.router.navigate(['/list']);
  });
}

}