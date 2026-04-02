import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
selector:'app-update-book',
standalone:true,
imports:[FormsModule],
templateUrl:'./update-book.component.html'
})

export class UpdateBookComponent{

book:any = {};
file:any;

constructor(private route:ActivatedRoute, private bookService:BookService){

this.book.id = this.route.snapshot.params['id'];

}

selectFile(e:any){
this.file = e.target.files[0];
}

updateBook(){

const formData = new FormData();

formData.append("id",this.book.id);
formData.append("title",this.book.title);
formData.append("author",this.book.author);
formData.append("description",this.book.description);

if(this.file){
formData.append("image",this.file);
}

this.bookService.updateBook(formData).subscribe();

}

}