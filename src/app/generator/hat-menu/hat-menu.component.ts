import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../types/Button';

@Component({
  selector: 'app-hat-menu',
  templateUrl: './hat-menu.component.html',
  styleUrls: ['./hat-menu.component.scss'],
})
export class HatMenuComponent {
  hatButtons: Button[] = [
    {
      name: 'Hat',
      value: 'Diploma-Hat.png',
    },
    {
      name: 'Helicopter hat',
      value: 'helicopter-hat-clipart.jpg',
    },
    {
      name: 'Santa',
      value: 'christmas_hat_transparent_image.png',
    },
  ];
  @Input() selectedButton: Button | null = null;
  @Output() buttonClicked = new EventEmitter<Button>();

  handleClick(button: Button) {
    this.buttonClicked.emit(button);
  }
}
