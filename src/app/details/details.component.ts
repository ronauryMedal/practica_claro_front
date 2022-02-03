import { Component, Inject, inject, OnInit } from '@angular/core';
import{MatDialog, MAT_DIALOG_DATA,}from '@angular/material/dialog'
import { Libro } from 'src/app/models/libro';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 public titulo:string='';
 public descripcion:string='';
 public autor:string='';
 public editora:string='';

  constructor(
    @Inject(MAT_DIALOG_DATA) public libro:Libro,
    public dialogref:MatDialogRef<DetailsComponent>
  ) { 
    this.titulo=libro.titulo
    this.descripcion=libro.descripcion
    this.autor=libro.autor
    this.editora=libro.editora

    console.log(libro);
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogref.close()
  }
}