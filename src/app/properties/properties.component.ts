import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/resizable.js';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  icon = faSortDown;
  properties: Array<any> = [
    {name: 'Height', option: 'choice'}
  ];
  openedTab = 'props';

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      $('.properties').resizable({ // doesnt work :C
      });
    } );
  }


  toggleTab(ref) {
    this.openedTab = ref;
  }

}
