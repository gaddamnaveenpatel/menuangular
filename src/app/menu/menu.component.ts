import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menu: any[] = [];



constructor(private menuservice:MenuService,private router:Router){}

ngOnInit(): void {
  
  this.menuservice.getallmenu().subscribe((data)=>{

    this.menu = data;
  })

}


Addmenu(){
 
  this.router.navigate(['/menuform']);

}

}