import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  constructor(private alertController: AlertController) {}

  taskList: Task[] = [
    {
      id: 0,
      title: "First",
      description: "The first task in the to-do list.",
      type: "Work",
      completed: false
    },
    {
      id: 1,
      title: "Second",
      description: "The second task in the to-do list.",
      type: "Home",
      completed: true
    },
    {
      id: 2,
      title: "Test",
      description: "This is just a test.",
      type: "Other",
      completed: false
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
    if ((this.todo as Task).title == undefined) {this.presentErrorAlert(); return}
    (this.todo as Task).id = this.taskList.length;
    (this.todo as Task).completed = false;
    this.taskList.push(this.todo as Task);
    this.todo = {};
    console.log(this.taskList);
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Enter a title for the new task',
      buttons: ['OK']
    });

    await alert.present();
  }
}
