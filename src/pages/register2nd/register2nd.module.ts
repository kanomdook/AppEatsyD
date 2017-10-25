import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register2ndPage } from './register2nd';

@NgModule({
  declarations: [
    Register2ndPage,
  ],
  imports: [
    IonicPageModule.forChild(Register2ndPage),
  ],
  exports: [
    Register2ndPage
  ]
})
export class Register2ndPageModule {}
