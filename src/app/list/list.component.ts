import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items: any[] = [];
  editingItem: any = null;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemService.getItems().subscribe(
      (items) => {
        this.items = items;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  deleteItem(itemId: string): void {
    this.itemService.deleteItem(itemId).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.items = this.items.filter((item) => item._id !== itemId);
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

  editItem(item: any): void {
    this.editingItem = { ...item };
  }

  updateItem(): void {
    if (this.editingItem) {
      this.itemService.updateItem(this.editingItem._id, this.editingItem).subscribe(
        (updatedItem) => {
          console.log('Item updated:', updatedItem);
          this.fetchItems(); // Refresh the item list after update
          this.editingItem = null;
        },
        (error) => {
          console.error('Error updating item:', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.editingItem = null;
  }

  navigateToCreate(): void {
    this.router.navigate(['/create']);
}
}