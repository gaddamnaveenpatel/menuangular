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
  this.getalldata();
}

getalldata(){

  this.menuservice.getallmenu().subscribe((data)=>{

    this.menu = data;
  });
}


Addmenu(){
 
  this.router.navigate(['/menuform']);

}

deletemenu(menu_id:number){

this.menuservice.deleteById(menu_id).subscribe(()=>{

  console.log(`Deleted item with ID: ${menu_id}`);
  this.getalldata();
})

}


idpass(menu_id:number){

  console.log(menu_id)
   this.router.navigate(['/Menuitemlist',menu_id])

}

}