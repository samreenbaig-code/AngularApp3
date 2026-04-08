import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html'
})
export class AddBookComponent {

title="";
author="";
description="";

constructor(private bookService:BookService, private router:Router){}

saveBook(){

this.bookService.addBook({
title:this.title,
author:this.author,
description:this.description
}).subscribe(()=>{

alert("Book Saved");

this.router.navigate(['/list']);

});

}

}