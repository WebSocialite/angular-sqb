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
  paginatedPhotos: any[] = [];
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(data => {
        this.photos = data;
        this.updatePagination();
      });
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedPhotos = this.photos.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.photos.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updatePagination(); 
    }
  }
  viewPhoto(id: number) {
    this.router.navigate(['/photos', id]);  
  }
}
