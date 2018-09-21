import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  userData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = this.navParams.get('userData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logOut() {
    firebase.auth().signOut();
    this.navCtrl.setRoot(HomePage);
  }

}
