import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IntroService } from './intro.service';
import { AfterLoginPage } from '../auth/after-login/after-login';
import { Auth } from '../../../providers/auth';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  private greeting: Array<any> = [];
  constructor(public auth: Auth, public navCtrl: NavController, private introService: IntroService) {
    let greetingID = '59f051e4991a161100378e5c';
    this.introService.getData(greetingID).then(data => {
      this.greeting = data.images;
    }).catch(err => {
      console.log(err);
    });
  }
  gotoRegisterPage() {
    if (this.auth.isLogedin() === true) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

}
