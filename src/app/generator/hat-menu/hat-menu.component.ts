import { Component } from '@angular/core';
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
      value: 'hat',
    },
    {
      name: 'Helicopter hat',
      value: 'helicopter-hat',
    },
    {
      name: 'Santa',
      value: 'santa',
    },
  ];
  selectedButton!: Button;

  handleClick(button: Button) {
    this.selectedButton = button;
  }
}
