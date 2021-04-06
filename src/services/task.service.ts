import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  taskList: Task[] = [
    {
      id: 1,
      description: 'Uma description qualquer',
      priority: 1
    },
    {
      id: 2,
      description: 'Uma outra description qualquer',
      priority: 2
    },
    {
      id: 3,
      description: 'Mais uma description qualquer',
      priority: 3
    },
    {
      id: 4,
      description: 'Uma outra ainda description qualquer',
      priority: 2
    },
    {
      id: 5,
      description: 'Mais uma outra ainda description qualquer',
      priority: 1
    },
  ];

  getSortList(parameter: string): Task[] {
    return this.taskList.sort((a, b) =>
      a[parameter] > b[parameter] ? 1
        : a[parameter] === b[parameter] ? 0
        : -1
    );
  }
}
