import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true, // ✅ Ensure it's standalone
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
            this.isLoading = false; // ✅ Data loaded
          },
          error: () => {
            this.isLoading = false; // ✅ Stop loading on error
          }
        });
    } else {
      this.isLoading = false; // ✅ Handle case where ID is missing
    }
  }
  goBack() {
    window.history.back();
  }
}
