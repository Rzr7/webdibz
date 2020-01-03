import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  // TODO: Get the template list dynamically and apply to the layout

  templates: Array<any> = [
    {
      title: 'test-template',
      html: '<div style="height: 64px; background: #1976d2;">test</div>'
    },
    {
      title: 'second-template',
      html: '<div style="height: 64px; background: #455346;">test2</div>'
    }
  ];

  blocks: Array<any> = [
    {
      title: 'test-block',
      html: '<div>test3</div>'
    },
    {
      title: 'second-block',
      html: '<div>test4</div>'
    }
  ];


  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.utils.makeResizable('.sidebar', 'right');
  }

  noReturnPredicate() {
    return false;
  }

}
