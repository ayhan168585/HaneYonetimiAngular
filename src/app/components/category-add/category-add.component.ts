import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  standalone: false,

  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService:ToastrService
  ) {}
  ngOnInit(): void {
    this.categoryService.getCategories()
    this.createCategoryAddForm()
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      Name: ['', Validators.required],
    });
  }

  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.add(categoryModel).subscribe(
        (response) => {
          categoryModel = response;
          this.toastrService.success(
            'Bir ürün eklendi',
            categoryModel.Name
          )
         
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
           
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              console.log(responseError)

              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Kategori ekleme sırasında hata oluştu');
    }
   
  }
}
