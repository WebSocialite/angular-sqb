import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/' } 
];
