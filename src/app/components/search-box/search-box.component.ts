import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
      <input type="text" placeholder="Search for Course" #courseName>
      <button type="button" (click)="searchTextEmitter.emit(courseName.value)">Submit</button>
  `
})
export class SearchBoxComponent {

  @Output()
  searchTextEmitter = new EventEmitter<string>();

}
