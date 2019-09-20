import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDCPVqp_j88RffzqmklV0I2lOCk-r5BdJ4",
  authDomain: "angular-maps-253507.firebaseapp.com",
  databaseURL: "https://angular-maps-253507.firebaseio.com",
  projectId: "angular-maps-253507",
  storageBucket: "",
  messagingSenderId: "428109782556",
  appId: "1:428109782556:web:d470ecb7948487028b09d9"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tuto3';
  constructor() {
    firebase.initializeApp(config);
  }
}
