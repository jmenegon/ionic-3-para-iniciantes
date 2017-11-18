import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public vNomeUsuario:string = "Julio Cesar Menegon do Codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(nrNumero1:number, nrNumero2:number):void{
    //alert(nrNumero1 + nrNumero2)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,2);

  }

}
