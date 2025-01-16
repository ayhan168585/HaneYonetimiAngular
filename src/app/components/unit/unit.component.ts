import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import { Unit } from '../../models/unit';

@Component({
  selector: 'app-unit',
  standalone: false,
  
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css'
})
export class UnitComponent implements OnInit {
  filterText=""
  units:Unit[]

  constructor(private unitService:UnitService){}
  ngOnInit(): void {
   this.getUnits()
  }

  getUnits(){
    this.unitService.getUnits().subscribe(response=>{
      this.units=response.data
    })
  }

}
