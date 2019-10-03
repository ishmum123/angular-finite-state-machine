import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppContainerComponent} from './components/app-container/app-container.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {ToasterComponent} from './components/toaster/toaster.component';
import {ListComponent} from './components/list/list.component';

@NgModule({
  declarations: [
    AppContainerComponent,
    SearchBoxComponent,
    ToasterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [SearchBoxComponent, ListComponent, ToasterComponent],
  providers: [],
  bootstrap: [AppContainerComponent]
})
export class AppModule {
}
