import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toaster',
  template: `
      <p>{{message}}</p>
  `
})
export class ToasterComponent {

  @Input()
  message: string;

}
