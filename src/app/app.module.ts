import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { FamilyPersonComponent } from './components/family-person/family-person.component';
import { IncomeComponent } from './components/income/income.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { RoleComponent } from './components/role/role.component';
import { UnitComponent } from './components/unit/unit.component';
import { NaviComponent } from './components/navi/navi.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ExpenseComponent,
    FamilyPersonComponent,
    IncomeComponent,
    MarketItemComponent,
    RoleComponent,
    UnitComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
