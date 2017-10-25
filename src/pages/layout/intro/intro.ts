import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IntroService } from './intro.service';
import { AfterLoginPage } from '../auth/after-login/after-login';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  private greeting: Array<any> = [];
  constructor(public navCtrl: NavController, private introService: IntroService) {
    let greetingID = '59f051e4991a161100378e5c';
    this.introService.getData(greetingID).then(data => {
      this.greeting = data.images;
    }).catch(err => {
      console.log(err);
    });
  }
  gotoLoginPage(){
    this.navCtrl.push('AfterLoginPage');
  }

}
