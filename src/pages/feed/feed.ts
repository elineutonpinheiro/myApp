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

  public objeto_feed = {
    titulo: "Senac Roraima",
    data: "17 de Março de 2018",
    descricao: "O mercado de trabalho precisa de você!",
    qtde_likes:12,
    qtde_comments:4,
    time_comment:"11h ago"
  }

  //public nomeUsuario:string = "Senac Roraima";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumeros(n1:number, n2:number):void{
    alert("Minha função funfou!\nSoma = "+(n1+n2));
  }

  ionViewDidLoad() {
    //this.somaNumeros(10,5);
    //console.log('ionViewDidLoad FeedPage');
  }

}
