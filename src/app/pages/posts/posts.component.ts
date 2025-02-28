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
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
  }

  get paginatedPosts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.posts.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.posts.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  viewPost(id: number) {
    this.router.navigate(['/posts', id]);  
  }
}
