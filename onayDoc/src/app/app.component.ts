import { Product } from './models/storage-table.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageTableComponent } from './storage-table/storage-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StorageTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onayDoc';

  productList: Product[] = [{
    brand: 'Tefal',
    articule: '685334498',
    name: 'Tefal KI700830 серебристый',
    price: 6050,
    exists: true
  },
  {
    brand: 'Tefal',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: false
  },
  {
    brand: 'Xiaomi',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: true
  },
  {
    brand: 'Tefal',
    articule: '685334498',
    name: 'Tefal KI700830 серебристый',
    price: 6050,
    exists: true
  },
  {
    brand: 'Tefal',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: false
  },
  {
    brand: 'Xiaomi',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: true
  },
  {
    brand: 'Tefal',
    articule: '685334498',
    name: 'Tefal KI700830 серебристый',
    price: 6050,
    exists: true
  },
  {
    brand: 'Tefal',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: false
  },
  {
    brand: 'Xiaomi',
    articule: '685321498',
    name: 'Электрочайник Tefal Silver Ion BF925231 белый',
    price: 7022,
    exists: true
  }
];
}
