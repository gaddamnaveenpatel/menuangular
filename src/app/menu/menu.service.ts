import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  private apiUrl = 'http://localhost:8080/api/getall';

  private baseUrl = 'http://localhost:8080/api';


  constructor(private httclient:HttpClient) { }


   getallmenu():Observable<any[]>{

    return this.httclient.get<any[]>(this.apiUrl)
    
   }

   deleteById(menu_id:number):Observable<void>{

    return this.httclient.delete<void>(`${this.baseUrl}/${menu_id}`)
   }

  
}