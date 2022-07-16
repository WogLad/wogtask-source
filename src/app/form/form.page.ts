import { Component } from '@angular/core';

export interface Task {
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  taskList: Task[] = [
    {
      title: "First",
      description: "The first task in the to-do list.",
      type: "Work"
    },
    {
      title: "Second",
      description: "The second task in the to-do list.",
      type: "Home"
    },
    {
      title: "Test",
      description: "This is just a test.",
      type: "Other"
    },
  ];
  
  taskTypes: string[] = [
    "Home",
    "Work",
    "Other"
  ];

  todo = {};

  parseTodoForm() {
    // console.log(this.todo);
    if ((this.todo as Task).title == undefined) {return}
    this.taskList.push(this.todo as Task);
    this.todo = {};
    console.log(this.taskList);
  }
}
