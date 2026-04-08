import { Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddBookComponent } from './pages/add/add.component';
import { DeleteBookComponent } from './pages/delete-book/delete-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'delete', component: DeleteBookComponent },
  { path: 'update', component: UpdateBookComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];