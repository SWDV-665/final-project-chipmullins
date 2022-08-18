import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListerServiceProvider } from '../../providers/lister-service/lister-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Lister - To Do";

  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: ListerServiceProvider, public inputDialogService: InputDialogServiceProvider, private sms: SMS) {

  }

  loadTasks() {
    return this.dataService.getTasks();
  }

  removeTask(task, index) {
    console.log("Removing Task - ", task, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Task - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeTask(index);
  }

  completeTask(task,index) {
    this.dataService.finishTask(task, index);

  }

  editTask(task, index) {
    console.log("Edit Task - ", task, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Task - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(task, index);
  }  
 

  addTask() {
    console.log("Adding Task");
    this.inputDialogService.showPrompt();
  }

  sendText(task) {
    let thing = "Task Item: " + task.taskname + " Due Date: " + task.duedate;

    this.sms.send('416123456', thing);
  }
 

 

}
