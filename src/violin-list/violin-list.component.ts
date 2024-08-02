import { Component } from '@angular/core';
import { violin } from '../assets/data';
import { CommonModule } from '@angular/common';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-violin-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './violin-list.component.html',
  styleUrl: './violin-list.component.css'
})
export class ViolinListComponent {
  violin = violin
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
