import { Component } from '@angular/core';
import { Button } from '../types/Button';

@Component({
  selector: 'app-eyes-menu',
  templateUrl: './eyes-menu.component.html',
  styleUrls: ['./eyes-menu.component.scss'],
})
export class EyesMenuComponent {
  eyeButtons: Button[] = [
    {
      name: 'Sun glasses',
      value: 'sun-glasses',
    },
    {
      name: 'Glasses',
      value: 'glasses',
    },
    {
      name: 'Sleep',
      value: 'sleep',
    },
  ];
  selectedButton!: Button;

  handleClick(button: Button) {
    this.selectedButton = button;
  }
}
