import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from '../models/libro';
import { ApiLibroService } from '../services/api-libro.service';
import {FormGroup,FormControl,FormBuilder, Validators}from '@angular/forms'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public Updatelibro?:Libro 

  public newLibro=this.formbuilder.group({
    titulo:["",Validators.required],
    descripcion:["",Validators.required],
    autor:["",Validators.required],
    editora:["",Validators.required]
  })


  constructor(public dialogRef:MatDialogRef<DialogComponent>,
    public apiLibro:ApiLibroService,
    public snack:MatSnackBar,
    public formbuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public libro:Libro )
     {

      if(this.libro!==null){
        this.Updatelibro=libro;
      }

      }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }


  AddLibro(){
     /* const libro:Libro ={
        titulo:this.newLibro.value,
        descripcion:"es un libro para aprener a leer",
        autor:"yo soy el autor",
        editora:"mi casa"
      }*/
          
      this.apiLibro.add(this.newLibro.value).subscribe(response=>{
        if(response.status==1){
          this.dialogRef.close();
         this.snack.open("libro guardado con exito","",{
           duration:3000
          })
        }
      })

  }




}
