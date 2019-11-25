import { Component } from '@angular/core';
import { DatabaseService } from 'src/shared/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webdibz';
  
  constructor(private db: DatabaseService) {

  }

}
