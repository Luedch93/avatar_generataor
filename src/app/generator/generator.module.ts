import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { EyesMenuComponent } from './eyes-menu/eyes-menu.component';
import { HatMenuComponent } from './hat-menu/hat-menu.component';
import { AvatarDirective } from './directives/avatar.directive';

@NgModule({
  declarations: [
    ButtonListComponent,
    EyesMenuComponent,
    HatMenuComponent,
    AvatarDirective,
  ],
  imports: [CommonModule],
  exports: [EyesMenuComponent, HatMenuComponent, AvatarDirective],
})
export class GeneratorModule {}
