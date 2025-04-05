import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'lib-common-skill-ui',
  imports: [CommonModule, NgCircleProgressModule],
  standalone: true,
  templateUrl: './common-skill-ui.component.html',
  styleUrl: './common-skill-ui.component.scss',
})
export class CommonSkillUiComponentComponent {

  @Input() progress = 0
  @Input() platform = ""
  @Input() label = ""

  get colorCircle() {
    if(this.progress > 50) {
      return '#2fbf48'
    } else if(this.progress > 25 ) {
      return '#38b6dc'
    } else {
      return '#1a1a1a'
    }
  }

  get textSkill() {
    if(this.progress > 50) {
      return { label: 'Ottima', class: 'verygood' }
    } else if(this.progress > 25 ) {
      return { label: 'Buona', class: 'good' }
    } else {
      return { label: 'Base', class: 'base' }
    }
  }

}
