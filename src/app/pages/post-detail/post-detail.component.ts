import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: any = null; 
  isLoading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id'); // Get Post ID from URL
    if (postId) {
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .subscribe({
          next: (data: any) => {
            this.post = data;
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
