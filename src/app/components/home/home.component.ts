import { Component, OnInit } from '@angular/core';
import { ApiLibroService } from '../../services/api-libro.service';
import { DialogComponent } from '../../dialog/dialog.component';
import {Response}from '../../models/response';
import {MatButton}from '@angular/material/button'
import {MatDialog}from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/models/libro';
import { UpdateDialogComponent } from '../../update-dialog/update-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public buscar:any;

  public listaLibros:any[""];
  constructor( private _api:ApiLibroService,private dialog:MatDialog,public snack:MatSnackBar) {
    this.GetLibros();
  }
  ngOnInit(): void {}

  GetLibros(){

    this._api.getLibros().subscribe(response=>{
      this.listaLibros=response.data;
      console.log(response.data)
    })
  }
  OpenAdd(){ 
    const dialogref=this.dialog.open(DialogComponent,{
      width:'500px'
    });

    dialogref.afterClosed().subscribe(result =>{
        this.GetLibros();
    })
  }

  delete(id:number){  
    this._api.delete(id).subscribe(result =>{

      if(result.status==1){
        this.GetLibros();
          this.snack.open("libro eliminado correctamente","",{
            duration:3000
          })
      }

    })

  }

  openEdit(item :Libro){

    const dialogref=this.dialog.open(UpdateDialogComponent,{
      width:'500px',
      data:item
    });

    dialogref.afterClosed().subscribe(result =>{
        this.GetLibros();
    })
   
  }


  buscarid(){
    this._api.getLibroId(this.buscar).subscribe(result =>{
      this.listaLibros=result.data
    })
  }

}
