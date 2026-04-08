import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = "";
  email = "";
  password = "";

  constructor(private service: BookService) {}

  register() {

    this.service.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe((res:any)=>{

      alert("User Registered");

    });

  }

}