import { WelcomePage } from '../pages/welcome/welcome';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//*********** ionic Native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

//***********  Angularfire2 v4 **************/

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


//*********** Provider **************/
import { AuthData } from '../providers/auth-data';
import { RadioPlayer } from '../providers/radio-service';
import { Firebase } from '@ionic-native/firebase';

//*********** Image Gallery **************/
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';
import { IntroService } from '../pages/layout/intro/intro.service';
import { HttpModule } from '@angular/http';


//********** firebase configuration  ************ */
export const config = {
  apiKey: "AIzaSyAKkCULXo1SNuBRN4KRzHl9D2DxV8LzZWE",
  authDomain: "testdev-475e6.firebaseapp.com",
  databaseURL: "https://testdev-475e6.firebaseio.com",
  projectId: "testdev-475e6",
  storageBucket: "testdev-475e6.appspot.com",
  messagingSenderId: "307498376583"
};

@NgModule({
  declarations: [
    MyApp,
    GalleryModal,
    ZoomableImage,
    WelcomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryModal,
    ZoomableImage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    RadioPlayer,
    Firebase,
    IntroService
  ]
})
export class AppModule { }
