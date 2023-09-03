import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDEXawVzKHkwgb0icGNw6lAQJAg2q_MD5c",
      authDomain: "fir-angular-auth-a2788.firebaseapp.com",
      projectId: "fir-angular-auth-a2788",
      storageBucket: "fir-angular-auth-a2788.appspot.com",
      messagingSenderId: "892346462244",
      appId: "1:892346462244:web:2b30adb853209f0e10a8b1"
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
