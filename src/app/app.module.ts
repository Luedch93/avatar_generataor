import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorModule } from './generator/generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GeneratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
