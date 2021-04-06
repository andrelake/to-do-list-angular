import { Component } from '@angular/core';
import '../../models/task.model';
import '../../services/task.service';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  taskList = this.service.getSortList('priority');

  constructor(private service: TaskService) {}
}
