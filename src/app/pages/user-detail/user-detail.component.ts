import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  user: any = null; 
  isLoading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id'); // Get user ID from URL
    if (userId) {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .subscribe({
          next: (data: any) => {
            this.user = data;
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
