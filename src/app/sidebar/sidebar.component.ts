import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  // TODO: Get the template list dynamically and apply to the layout
  currentlyOpened = 'templates';

  templates: Array<any> = [
    {
      title: 'test-template'
    },
    {
      title: 'second-template'
    }
  ];

  blocks: Array<any> = [
    {
      title: 'test-block'
    },
    {
      title: 'second-block'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  toggleCurrentlyOpened(ref) {
    console.log(ref);
   this.currentlyOpened = ref;
  }

}
