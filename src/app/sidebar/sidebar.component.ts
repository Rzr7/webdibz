import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  // TODO: Get the template list dynamically and apply to the layout
  currentlyOpened: string = 'templates'
  
  templates: Array<any> = [
    {
      title: 'test-template'
    },
    {
      title: 'second-template'
    }
  ]

  blocks: Array<any> = [
    {
      title: 'test-block'
    },
    {
      title: 'second-block'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  toggleCurrentlyOpened(ref) {
   this.currentlyOpened = ref
  }

}
