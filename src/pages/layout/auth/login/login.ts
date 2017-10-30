import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../../../providers/auth-data';
import { Auth } from '../../../../providers/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // public loginForm: any;
  private user: any = {};
  public backgroundImage: any = "./assets/bg1.jpg";
  public imgLogo: any = "./assets/medium_150.70391061453px_1202562_easyicon.net.png";

  constructor(private fbk: Facebook, public auth: Auth, public navCtrl: NavController, public authData: AuthData, public fb: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    // let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // this.loginForm = fb.group({
    //       email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
    //       password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    // });
  }

  // login(){
  //     if (!this.loginForm.valid){
  //         //this.presentAlert('Username password can not be blank')
  //         console.log("error");
  //     } else {
  //       let loadingPopup = this.loadingCtrl.create({
  //         spinner: 'crescent', 
  //         content: ''
  //       });
  //       loadingPopup.present();

  //       this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
  //       .then( authData => {
  //         console.log("Auth pass");
  //         loadingPopup.dismiss();
  //         this.navCtrl.setRoot('AfterLoginPage');
  //       }, error => {
  //         var errorMessage: string = error.message;
  //         loadingPopup.dismiss().then( () => {
  //             this.presentAlert(errorMessage)
  //         });
  //       });
  //     }
  // }

  login() {
    this.auth.login(this.user).subscribe(data => {
      this.auth.private().subscribe(user => {
        console.log(user);
      });
    });
  }

  facebookLogin() {
    this.fbk.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) =>
        this.fbk.api('me?fields=email,id,name', null).then((res: FacebookLoginResponse) =>
          alert(JSON.stringify(res)))
          .catch(e => {
            alert(JSON.stringify(res));
          })
      )
      .catch(e => {
        alert(JSON.stringify(e))
      });
  }

  forgot() {
    this.navCtrl.push('ForgotPage');
  }

  createAccount() {
    this.navCtrl.push('RegisterPage');
  }
  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

}
