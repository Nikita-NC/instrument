import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css'
})
export class ItemDescriptionComponent {
  faArrowLeft=faArrowLeft

}
