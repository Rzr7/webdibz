import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  canvasBlocks: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  dropCanvas(event: CdkDragDrop<string[]>) {
    if (event.isPointerOverContainer) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        const item = event.previousContainer.data[event.previousIndex];
        event.container.data.splice(event.currentIndex, 0, item);
      }
    }
  }

  dragExit(event: CdkDragDrop<string[]>) {
    // TODO: Do not show placeholder if block is outside of canvas.
  }

  isAllowed(item: CdkDrag<number>) {
    return true;
  }

}
