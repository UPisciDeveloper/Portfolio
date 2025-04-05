import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from '@portfolio/home-ui';

@Component({
  selector: 'lib-home-feature',
  imports: [CommonModule, HomeUiComponent],
  template: `<lib-home-ui></lib-home-ui>`,
  styles: ``,
})
export class HomeFeatureComponent {}
