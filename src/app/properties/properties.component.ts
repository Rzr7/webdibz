import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/resizable.js';
import { UtilsService } from 'src/shared/utils.service';

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

  constructor(private utils:UtilsService) { }

  ngOnInit() {
    this.utils.makeResizable('.properties', 'left')
  }


  toggleTab(ref) {
    this.openedTab = ref;
  }

}
