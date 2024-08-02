import { Component } from '@angular/core';
import { data } from '../assets/data';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  data=data

}
