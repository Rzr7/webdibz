import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/shared/database.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'webdibz';

  constructor(
    private db: DatabaseService,
    private router: Router
    ) {

  }

  getDb() {
    return this.db;
  }

  ngOnInit() {
    console.log('This auth', this.db.afAuth.auth);
  }


}
