import { Component, Input } from '@angular/core';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() photo!: Photo;

}
