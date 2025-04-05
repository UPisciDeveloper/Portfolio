import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonSkillUiComponentComponent } from '@portfolio/common-elems-ui';

@Component({
  selector: 'lib-home-ui',
  imports: [
    CommonModule,
    NgCircleProgressModule,
    CommonSkillUiComponentComponent,
  ],
  templateUrl: './home-ui.component.html',
  styleUrl: './home-ui.component.scss',
})
export class HomeUiComponent {
  img = 'assets/images/avatar.png';
}
