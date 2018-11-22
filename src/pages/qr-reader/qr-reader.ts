import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private qrScanner : BarcodeScanner
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrReaderPage');
  }

  scan() {
    this.qrScanner.scan().then(
      qrData => {
        console.log(qrData.text);
      }
    );
  }

}
