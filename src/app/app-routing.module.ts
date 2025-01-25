import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './components/expense/expense.component';
import { FamilyPersonComponent } from './components/family-person/family-person.component';
import { CategoryComponent } from './components/category/category.component';
import { IncomeComponent } from './components/income/income.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { UnitAddComponent } from './components/unit-add/unit-add.component';
import { UnitComponent } from './components/unit/unit.component';
import { RoleComponent } from './components/role/role.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { UploadProfilePictureComponent } from './components/upload-profile-picture/upload-profile-picture.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'expenses', component: ExpenseComponent,canActivate:[loginGuard] },
  { path: 'familypersons', component: FamilyPersonComponent,canActivate:[loginGuard] },
  { path: 'categories', component: CategoryComponent,canActivate:[loginGuard] },
  { path: 'incomes', component: IncomeComponent,canActivate:[loginGuard] },
  { path: 'marketitems', component: MarketItemComponent,canActivate:[loginGuard] },
  { path: 'expenses/category/:id', component: ExpenseComponent,canActivate:[loginGuard] },
  { path: 'categories/addcategory', component: CategoryAddComponent,canActivate:[loginGuard] },
  { path: 'units', component: UnitComponent,canActivate:[loginGuard] },
  { path: 'units/addunit', component: UnitAddComponent,canActivate:[loginGuard] },
  { path: 'roles', component: RoleComponent,canActivate:[loginGuard] },
  { path: 'roles/addrole', component: RoleAddComponent,canActivate:[loginGuard] },
  {path:"familypersons/upload-profile-picture/familyPersonId",component:UploadProfilePictureComponent,canActivate:[loginGuard]},
  {path:"familypersons/addfamilyperson",component:FamilyPersonComponent,canActivate:[loginGuard]},
  {path:"login",component:LoginComponent},
  {path:"reports",component:ReportComponent,canActivate:[loginGuard]} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
