import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent implements OnInit {
  album: any = null; 
  isLoading = true; 
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id'); // Get album ID from URL
    if (albumId) {
      this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .subscribe({
          next: (data: any) => {
            this.album = data;
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false; 
          }
        });
    } else {
      this.isLoading = false;
    }
  }
  goBack() {
    window.history.back();
  }
}
