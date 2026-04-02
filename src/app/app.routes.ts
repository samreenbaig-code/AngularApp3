import { Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddBookComponent } from './pages/add/add.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { DeleteBookComponent } from './pages/delete-book/delete-book.component';

export const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },

  { path: 'list', component: ListComponent },

  { path: 'add', component: AddBookComponent },

  { path: 'update/:id', component: UpdateBookComponent },

  { path: 'delete/:id', component: DeleteBookComponent }

];