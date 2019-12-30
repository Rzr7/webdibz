import { Injectable } from '@angular/core';
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  // Static methods for overall use

  /**
   * 
   * @param {string} jQueryElement - jQuery element (".some-class") to make resizable
   * @param {string} side - side of element to make resizable ('right, left, top, bottom') 
   */
  makeResizable(jQueryElement, side) {
    console.log($(jQueryElement), side)
    let el = $(jQueryElement)
    let handles = 'e'
    if (side == 'left') {
      handles = 'w'
    }
    el.resizable({
      minWidth: 250,
      helper: 'ui-resizable-helper',
      animate: true,
      handles: handles,
    });

    
  }

}
