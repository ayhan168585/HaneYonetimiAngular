import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-add',
  standalone: false,

  templateUrl: './unit-add.component.html',
  styleUrl: './unit-add.component.css',
})
export class UnitAddComponent implements OnInit {

  unitAddForm:FormGroup
  constructor(
    private unitService: UnitService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createUnitAddForm()
  }

  createUnitAddForm(){
    this.unitAddForm=this.formBuilder.group({
      Name:["",Validators.required]
    })
  }

  add(){
    if(this.unitAddForm.valid){
      let unitModel=Object.assign({},this.unitAddForm.value)
      this.unitService.add(unitModel).subscribe((response)=>{
        unitModel=response
        this.toastrService.success("Bir birim eklendi",unitModel.Name)
      },(responseError)=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası")
            
          }
        }
      })
    }else{
      this.toastrService.error("Birim ekleme sırasında hata oluştu")
    }
  }
}
