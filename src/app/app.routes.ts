import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent }, 
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotoDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '**', redirectTo: '/' } 
];
