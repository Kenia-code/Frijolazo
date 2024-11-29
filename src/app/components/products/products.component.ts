import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  imgHabanero: string = 'assets/img/habanero.jpeg';
  imgAjo: string = 'assets/img/ajo.jpeg';
  imgCebolla: string = 'assets/img/cebolla.jpeg';
}
