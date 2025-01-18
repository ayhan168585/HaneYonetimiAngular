import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { IncomeComponent } from './components/income/income.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { RoleComponent } from './components/role/role.component';
import { UnitComponent } from './components/unit/unit.component';
import { NaviComponent } from './components/navi/navi.component';
import { provideHttpClient } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { UnitAddComponent } from './components/unit-add/unit-add.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { FamilyPersonComponent } from './components/family-person/family-person.component';
import { UploadProfilePictureComponent } from './components/upload-profile-picture/upload-profile-picture.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ExpenseComponent,
    IncomeComponent,
    MarketItemComponent,
    RoleComponent,
    UnitComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CategoryAddComponent,
    UnitAddComponent,
    RoleAddComponent,
    FamilyPersonComponent,
    UploadProfilePictureComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      
    })
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
