import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8080/api'; // Base URL for your API


  constructor(private http:HttpClient) { }

  getMenuIdById(menuId:number):Observable<any>{

    const url = `${this.baseUrl}/gettbyid/${menuId}`;

    return this.http.get<any>(url);
  }
}
