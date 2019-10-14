import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';


  
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBpKgf3tjEPgTFPxk4k5wQZkyEo-xSKDbQ",
      authDomain: "http-client-demo-97bd3.firebaseapp.com",
      databaseURL: "https://http-client-demo-97bd3.firebaseio.com",
      projectId: "http-client-demo-97bd3",
      storageBucket: "http-client-demo-97bd3.appspot.com",
      messagingSenderId: "943185286554",
      appId: "1:943185286554:web:4b29a9c8ffb450a6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
