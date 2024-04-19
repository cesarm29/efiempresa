import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  submit(value: string) {
    this.newItemEvent.emit(value);
  }
}
