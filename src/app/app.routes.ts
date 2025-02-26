import { Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];
