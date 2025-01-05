import { Component, OnInit } from '@angular/core';
import { FamilyPersonService } from '../../services/family-person.service';
import { FamilyPerson } from '../../models/familyPerson';

@Component({
  selector: 'app-family-person',
  standalone: false,
  
  templateUrl: './family-person.component.html',
  styleUrl: './family-person.component.css'
})
export class FamilyPersonComponent implements OnInit {
  familyPersons:FamilyPerson[]

  constructor(private familyPersonService:FamilyPersonService){}

  ngOnInit(): void {
    this.getFamilyPersons()
  }

  getFamilyPersons(){
    this.familyPersonService.getFamilyPersons().subscribe(response=>{
      this.familyPersons=response.data
    })
  }

}
