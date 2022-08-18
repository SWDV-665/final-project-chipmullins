
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ListerServiceProvider } from '../../providers/lister-service/lister-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: ListerServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(task?, index?) {
    const prompt = this.alertCtrl.create({
      title: task ? 'Edit Task' : 'Add Task',
      message: task ? "Editing Task" : "Enter Task to Add",
      inputs: [
        {
          name: 'taskname',
          placeholder: 'Name',
          value: task ? task.taskname : null
        },
        {
          name: 'duedate',
          placeholder: 'Due Date',
          value: task ? task.duedate : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: task => {
            console.log('Saved clicked', task);
            if (index !== undefined) {
              this.dataService.editTask(task, index);
            }
            else {
              this.dataService.addTask(task);
            }

          }
        }
      ]
    });
    prompt.present();
  }

}
