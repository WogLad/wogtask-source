import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  type: string;
}

var taskList: Task[] = [
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

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  todo = {};

  parseTodoForm() {
    // console.log(this.todo);
    taskList.push(this.todo as Task);
    console.log(taskList);
  }
}
