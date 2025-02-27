import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss'
})
export class PhotoDetailComponent implements OnInit {
  photo: any = null; 
  isLoading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const photoId = this.route.snapshot.paramMap.get('id'); // Get photo ID from URL
    if (photoId) {
      this.http.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .subscribe({
          next: (data: any) => {
            this.photo = data;
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
