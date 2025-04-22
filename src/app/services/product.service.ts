import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private http:HttpClient ) { }


  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

}
