import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
@IonicPage()
export class TabsPage {

  homeRoot = 'HomePage'
  promotionRoot = 'PromotionPage'
  eatsyRoot = 'EatsyPage'
  notificationRoot = 'NotificationPage'
  moreRoot = 'MorePage'


  constructor(public navCtrl: NavController) {}

}
