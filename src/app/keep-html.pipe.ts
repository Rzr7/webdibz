import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml'
})
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }
  transform(value: any, ...args: any[]): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
