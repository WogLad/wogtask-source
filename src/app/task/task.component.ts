import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../form/form.page';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() id: number;

  constructor() { }

  ngOnInit() {}

  statusChange(e) {
    console.log(e.detail.checked);
    console.log(this.id);

    // (DONE): Update the lists of tasks in the localStorage.
    var taskList:Task[] = JSON.parse(localStorage.getItem("taskList"));
    taskList[this.id].completed = e.detail.checked;
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

}
