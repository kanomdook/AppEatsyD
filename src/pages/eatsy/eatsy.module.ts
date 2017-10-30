import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatsyPage } from './eatsy';

@NgModule({
  declarations: [
    EatsyPage,
  ],
  imports: [
    IonicPageModule.forChild(EatsyPage),
  ],
  exports: [
    EatsyPage
  ]
})
export class EatsyPageModule {}
