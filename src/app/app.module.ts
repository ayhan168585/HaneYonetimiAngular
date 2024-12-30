import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ExpenseItemComponent } from './components/expense-item/expense-item.component';
import { FamilyPersonComponent } from './components/family-person/family-person.component';
import { IncomeComponent } from './components/income/income.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { MarketItemPhotoComponent } from './components/market-item-photo/market-item-photo.component';
import { RoleComponent } from './components/role/role.component';
import { UnitComponent } from './components/unit/unit.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ExpenseComponent,
    ExpenseItemComponent,
    FamilyPersonComponent,
    IncomeComponent,
    MarketItemComponent,
    MarketItemPhotoComponent,
    RoleComponent,
    UnitComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
