import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../types/Button';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss'],
})
export class ButtonListComponent {
  @Output() optionClick = new EventEmitter<Button>();
  @Input() buttons!: Button[];
  @Input() selectedButton!: Button;

  buttonClicked(button: Button) {
    this.optionClick.emit(button);
  }
}
