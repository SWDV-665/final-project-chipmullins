import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListerServiceProvider } from '../../providers/lister-service/lister-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title = "Lister - Completed Tasks";

  constructor(public navCtrl: NavController, public dataService: ListerServiceProvider) {

  }

  loadCompleted() {
    return this.dataService.getCompleted();
  }

}
