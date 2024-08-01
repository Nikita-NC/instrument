import { Component } from '@angular/core';
import { data, data_list } from '../assets/data';
import { CommonModule } from '@angular/common';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemDescriptionComponent } from '../item-description/item-description.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, ItemDescriptionComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  data = data;
  data_list = data_list;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  getStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push({ icon: this.faStar, class: 'text-yellow-500' });
    }

    if (halfStars) {
      stars.push({ icon: this.faStarHalfStroke, class: 'text-yellow-500' });
    }

    return stars;
    
  }
  
}
