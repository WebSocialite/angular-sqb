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
  paginatedAlbums: any[] = [];
  currentPage = 1;
  itemsPerPage = 4;

  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(data => {
        this.albums = data;
        this.updatePagination();
      });
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedAlbums = this.albums.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.albums.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updatePagination(); 
    }
  }
  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]); 
  }
}
