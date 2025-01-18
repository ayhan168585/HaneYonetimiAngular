import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-add',
  standalone: false,

  templateUrl: './role-add.component.html',
  styleUrl: './role-add.component.css',
})
export class RoleAddComponent implements OnInit {
  addRoleForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRoleAddForm()
  }

  createRoleAddForm(){
    this.addRoleForm=this.formBuilder.group({
      Name:["",Validators.required]
    })
  }

  add(){
    if(this.addRoleForm.valid){
      let roleModel=Object.assign({},this.addRoleForm.value)
      this.roleService.add(roleModel).subscribe((response)=>{
        roleModel=response
        this.toastrService.success("Bir rol eklendi",roleModel.Name)
      },(responseError)=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
           this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası")
            
          }
        }
      })
      
    }else{
      this.toastrService.error("Rol ekleme sırasında hata oluştu ")
    }
  }
}
