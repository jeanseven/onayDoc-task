import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/storage-table.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-storage-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storage-table.component.html',
  styleUrl: './storage-table.component.scss'
})
export class StorageTableComponent implements OnInit {
  @Input() productList: Product[] | undefined;

  ngOnInit(): void {
    console.log('productList:', this.productList)
}
}
