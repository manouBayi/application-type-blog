import {Component} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-type-blog';


  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBClOmp0y7T_7a97TDTNdLRwGmQZxrhVZw",
      authDomain: "application-type-blog.firebaseapp.com",
      databaseURL: "https://application-type-blog.firebaseio.com",
      projectId: "application-type-blog",
      storageBucket: "",
      messagingSenderId: "463959686962",
      appId: "1:463959686962:web:906070bafd117f0f"
    };
    firebase.initializeApp(firebaseConfig);

  }


}
