import { Component } from '@angular/core';
import { DatabaseService } from 'src/shared/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webdibz';
  
  constructor(
    private db: DatabaseService,
    private router: Router
    ) {
      
  }

}
