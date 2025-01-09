import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ActivatedRoute } from '@angular/router';
import { ExpenseListDto } from '../../models/expenseListDto';

@Component({
  selector: 'app-expense',
  standalone: false,
  
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {

  expenses:Expense[]
  filterText=""

  constructor(private expenseService:ExpenseService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["id"]){
      this.getExpensesByCategory(params["id"])
    }else{
      this.getExpenses()
    }
      
    
   })
  }
  getExpenses(){
    this.expenseService.getExpenses().subscribe(response=>{
      this.expenses=response.data
    })
  }
  getExpensesByCategory(categoryId:number){
    this.expenseService.getExpensesByCategory(categoryId).subscribe(response=>{
      this.expenses=response.data
    })
  }


}
