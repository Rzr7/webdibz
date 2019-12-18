import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  icon = faSortDown;
  properties: Array<any> = [
    {name: 'Height', option: 'choice'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
