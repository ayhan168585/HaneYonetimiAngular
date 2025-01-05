import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income';
import { IncomeService } from '../../services/income.service';

@Component({
  selector: 'app-income',
  standalone: false,
  
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {
  incomes:Income[]
  constructor(private incomeService:IncomeService){}
  ngOnInit(): void {
   this.getIncomes()
  }
  getIncomes(){
    this.incomeService.getIncomes().subscribe(response=>{
      this.incomes=response.data
    })
  }



}
