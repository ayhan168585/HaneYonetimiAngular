import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './components/expense/expense.component';
import { FamilyPersonComponent } from './components/family-person/family-person.component';
import { CategoryComponent } from './components/category/category.component';
import { IncomeComponent } from './components/income/income.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';

const routes: Routes = [
  {path:"",component:ExpenseComponent},
  {path:"expenses",component:ExpenseComponent},
  {path:"familypersons",component:FamilyPersonComponent},
  {path:"categories",component:CategoryComponent},
  {path:"incomes",component:IncomeComponent},
  {path:"marketitems",component:MarketItemComponent},
  {path:"expenses/category/:id",component:ExpenseComponent},
  {path:"categories/addcategory",component:CategoryAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
