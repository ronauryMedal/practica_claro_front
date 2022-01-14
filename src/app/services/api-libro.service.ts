import { Injectable } from '@angular/core';
import  {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Response}from '../models/response'
import { Libro } from '../models/libro';


const HttpOption={
  header:new HttpHeaders({
    'Contend-Type':'application/Json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiLibroService {

    url:string ='https://localhost:5001/api/Libro';


  constructor(
    private _http:HttpClient
  ) { }

    getLibros():Observable<Response>
    {
      return this._http.get<Response>(this.url)
    }

    add(libro:Libro):Observable<any>{
        return this._http.post<Response>(this.url,libro);
    }

    delete(id:number):Observable<any>{

      return this._http.delete(`${this.url}/${id}`);
    }

    update(libro:Libro):Observable<any>{
      return this._http.put<Response>(this.url,libro)
    }


    getLibroId(id:number):Observable<Response>
    {
      return this._http.get<Response>(`${this.url}/${id}`)
    }

}
