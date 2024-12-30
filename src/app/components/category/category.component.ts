import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { CategoryResponseModel } from '../../models/categoryResponseModel';

@Component({
  selector: 'app-category',
  standalone: false,

  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  apiUrl = 'https://localhost:7039/api/categories/getall';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.httpClient
      .get<CategoryResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.categories = response.data;
      });
  }
}
