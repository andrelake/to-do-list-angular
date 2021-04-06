import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-newtask',
  templateUrl: './input-newtask.component.html',
  styleUrls: ['./input-newtask.component.css']
})
export class InputNewtaskComponent {

  @Input() expanded;

}
