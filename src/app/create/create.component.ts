import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  newItem: any = { name: '', description: '' }; // Replace with your data structure

  constructor(private router: Router) { }

  createItem(): void {
    // Call the create API with this.newItem
    // On successful creation, navigate back to the list component
  }
}