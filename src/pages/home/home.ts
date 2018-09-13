import { Component } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import * as firebase from 'firebase';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    isUserLoggedIn: any = false;
    userData: any = {};

    constructor(public toastCtrl: ToastController, public platform: Platform, public googleplus: GooglePlus, public facebook: Facebook) {
        platform.ready().then(() => {
            firebase.auth().onAuthStateChanged(authData => {
                if (authData != null) {
                    this.isUserLoggedIn = true;
                    this.userData = authData;
                    console.log(authData);
                } else {
                    this.userData = {};
                }
            });
        });
    }

    logout() {
        firebase.auth().signOut();
    }

    displayToast(message) {
        this.toastCtrl.create({ message, duration: 3000 }).present();
    }

    googleLogin() {

        // browser login
        if (this.platform.is('core')) {
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(gpRes => {
                this.displayToast('Login Success')
                this.userData = gpRes.additionalUserInfo.profile;
            }).catch(err => this.displayToast(err));

        }

        // cordova login
        else {
            this.googleplus.login({
                'webClientId': '157465836336-3vcah4bqikpiegrsog3rkop39obck2gj.apps.googleusercontent.com'
            }).then((success) => {
                console.log(success);
                let credential = firebase.auth.GoogleAuthProvider.credential(success['idToken'], null);
                firebase.auth().signInWithCredential(credential).then((data) => {
                    console.log(data);
                }).catch((err) => this.displayToast('[ERRO 1]' + err));
            }, err => this.displayToast('[ERRO 2]' + err));
        }
    }

    facebookLogin() {
        // browser login
        if (this.platform.is('core')) {
            firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(gpRes => {
                this.displayToast('Login Success')
                this.userData = gpRes.additionalUserInfo.profile;
            }).catch(err => this.displayToast(err));

        }

        // cordova login
        else {
            this.facebook.login(['email']).then((success) => {
                console.log(success);
                let credential = firebase.auth.FacebookAuthProvider.credential(success.authResponse.accessToken);
                firebase.auth().signInWithCredential(credential).then((data) => {
                    console.log(data);
                }).catch((err) => this.displayToast('[ERRO 1]' + err));
            }, err => this.displayToast('[ERRO 2]' + err));
        }
    }

}
