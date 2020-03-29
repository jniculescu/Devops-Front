import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {BankComponent} from './bank/bank.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'bank', component: BankComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
