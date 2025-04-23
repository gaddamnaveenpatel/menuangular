import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menuitemlist',
  templateUrl: './menuitemlist.component.html',
  styleUrls: ['./menuitemlist.component.css']
})
export class MenuitemlistComponent implements OnInit {
  menuId!: number;
  menuItem: any[] = []; // Ensure it's initialized as an array

  constructor(private menuservice: ServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Extract the menuId from the route parameters
    this.menuId = +this.route.snapshot.paramMap.get('id')!;  // Convert string to number

    // Once we have the menuId, fetch the menu item details
    this.fetchMenuItem();
  }

  fetchMenuItem(): void {
    this.menuservice.getMenuIdById(this.menuId).subscribe(
      (data) => {
        this.menuItem = data.menuItemsList;
        console.log('Fetched menu item:', this.menuItem);  // Log the fetched item
      },
      (error) => {
        console.error('Error fetching menu item:', error);  // Log any error
      }
    );
  }
}
