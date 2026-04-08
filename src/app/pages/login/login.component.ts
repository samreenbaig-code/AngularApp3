import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = "";
  password = "";

  constructor(private service: BookService) {}

  login() {

    this.service.login({
      email: this.email,
      password: this.password
    }).subscribe((res:any)=>{

      if(res.success){
        alert("Login Success");
      }else{
        alert("Login Failed");
      }

    });

  }

}