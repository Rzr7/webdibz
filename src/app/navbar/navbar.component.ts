import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/shared/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private db: DatabaseService,
    private router: Router
    ) {

  }

  ngOnInit() {
  }

  getDb() {
    return this.db;
  }

}
