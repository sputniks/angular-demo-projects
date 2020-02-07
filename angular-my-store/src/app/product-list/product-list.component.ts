import { Component, Input } from '@angular/core';

import { products } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  @Input() productId: number;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(foo) {
    window.alert('foo is ' + foo);
  }
}