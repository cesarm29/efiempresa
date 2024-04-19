import { Component, Input } from '@angular/core';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.scss'
})
export class CardDescriptionComponent {
  @Input() photo!: Photo;

}
