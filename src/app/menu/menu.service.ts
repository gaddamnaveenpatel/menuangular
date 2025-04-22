import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  private apiUrl = 'http://localhost:8080/api/getall';

  constructor(private httclient:HttpClient) { }


   getallmenu():Observable<any[]>{

    return this.httclient.get<any[]>(this.apiUrl)
    
   }

  
}