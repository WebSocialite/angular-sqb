import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data: any) => {
          this.users = data;
        },
        error: (err) => console.error("Error fetching users:", err)
      });
  }
  viewUser(id: number) {
    this.router.navigate(['/users', id]);  
  }
}
