import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';
import { Libro } from '../models/libro';
import { ApiLibroService } from '../services/api-libro.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

 public id: number;
 public titulo:string='';
 public descripcion:string='';
 public autor:string='';
 public editora:string='';

 public variableUpdate:Libro=this.libro;

  constructor(public dialogRef:MatDialogRef<DialogComponent>,
    public apiLibro:ApiLibroService,
    public snack:MatSnackBar,
    public formbuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public libro:Libro
    ) {
      this.id=this.libro.id
      this.titulo=libro.titulo;
      this.descripcion=libro.descripcion;
      this.autor=libro.autor;
      this.editora=libro.editora;
      
     }

  ngOnInit(): void {
    
  }
  close(){
    this.dialogRef.close();
  }

  acualizar(){
    const updatelibro:Libro={
      id:this.id,
      titulo:this.titulo,
      descripcion:this.descripcion,
      autor:this.autor,
      editora:this.editora
    }
    this.apiLibro.update(updatelibro).subscribe(result =>{
      if(result.status==1){
        this.dialogRef.close();
        this.snack.open("libro actualizo con exito","",{
          duration:3000
         })
      }
      
    })
  }

}
