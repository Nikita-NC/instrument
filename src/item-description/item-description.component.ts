import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { data_list } from '../assets/data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule,NavBarComponent],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {
  faArrowLeft = faArrowLeft;

  item: any;

  constructor(private router: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.item = data_list.find((item) => item.id === id);
  }

  goBack(): void{
    this.location.back()
  }
}
