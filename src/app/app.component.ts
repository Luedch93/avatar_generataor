import { Component } from '@angular/core';
import { Button } from './generator/types/Button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedHat: Button | null = null;

  handleHatChange(button: Button) {
    this.selectedHat = button;
  }
}
