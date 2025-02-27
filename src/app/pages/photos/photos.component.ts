import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {
  photos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe({
        next: (data: any) => {
          this.photos = data;
        },
        error: (err) => console.error("Error fetching photos:", err)
      });
  }
  viewPhoto(id: number) {
    this.router.navigate(['/photos', id]);  
  }
}
