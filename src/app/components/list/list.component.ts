import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
      <ul>
          <li *ngFor="let elem of data">
              <p *ngFor="let f of fields">{{elem[f]}}&nbsp;&nbsp;</p>
          </li>
      </ul>
  `
})
export class ListComponent {

  @Input()
  data: any[];

  @Input()
  fields: string[];

}
