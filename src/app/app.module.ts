import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule}from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule}from '@angular/material/dialog';
import {MatInputModule}from '@angular/material/input';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component'
import {MatGridListModule}from'@angular/material/grid-list'
import {FormsModule,ReactiveFormsModule}from'@angular/forms';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    HomeComponent,
    DialogComponent,
    UpdateDialogComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,MatDialogModule,MatInputModule
    ,MatSnackBarModule,
    MatGridListModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
