import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menufrom',
  templateUrl: './menufrom.component.html',
  styleUrls: ['./menufrom.component.css']
})
export class MenufromComponent implements OnInit {

  menuForm!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}

  ngOnInit(): void {

    this.menuForm = this.fb.group({
      name:[''],
      description:[''],
      price:[''],
      available:[true]
    });
    
  }

  onSubmit(){

    const  formvalue = this.menuForm.value;

    const body = new HttpParams()

    .set('name', formvalue.name)
      .set('description', formvalue.description)
      .set('price', formvalue.price)
      .set('isAvailable', formvalue.available);

     const  headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});


     this.http.post('http://localhost:8080/api/save',body.toString(),{ headers  })
     .subscribe((res)=>console.log("data save sussful",res ,
      this.route.navigate(['/menu'])
     ),
      
     (err)=>console.log("error saving data",err)
  
  );

  }

}
