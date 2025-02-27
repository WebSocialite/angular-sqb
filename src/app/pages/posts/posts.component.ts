import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data: any) => {
          this.posts = data;
        },
        error: (err) => console.error("Error fetching posts:", err)
      });
  }
  viewPost(id: number) {
    this.router.navigate(['/posts', id]);  
  }
}
