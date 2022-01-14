import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path:'formulario', component:FormularioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
