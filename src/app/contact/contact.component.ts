import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private r:Router){}


  ngOnInit(): void {
    
  }


  goToAbout(){

     this.r.navigate(['/about'])


  }

}
