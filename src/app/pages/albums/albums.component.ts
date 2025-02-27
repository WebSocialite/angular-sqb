import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/albums')
      .subscribe({
        next: (data: any) => {
          this.albums = data;
        },
        error: (err) => console.error("Error fetching albums:", err)
      });
      
  }
  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]); 
  }
}
