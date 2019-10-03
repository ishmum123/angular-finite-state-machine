import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {CourseSearchService} from '../../services/course-search/course-search.service';
import {switchMap} from 'rxjs/operators';
import {ListComponent} from '../list/list.component';
import {ToasterComponent} from '../toaster/toaster.component';

@Component({
  selector: 'app-container',
  template: `
      <ng-template #holder></ng-template>
  `
})
export class AppContainerComponent implements OnInit {

  @ViewChild('holder', {read: ViewContainerRef, static: true})
  container: ViewContainerRef;

  readonly STATES = {
    start: {
      WAIT: 'idle'
    },
    idle: {
      SEARCH: 'loading'
    },
    refreshing_view: {
      FINISHED: 'idle',
    },
    loading: {
      RECEIVE_SUCCESS_RESULT: 'list_populated',
      RECEIVE_FAILURE_RESULT: 'toaster_shown',
    },
    list_populated: {
      // TODO: Parallel/Nested States -> https://medium.com/angular-athens/working-with-state-machines-in-angular-2817441e26bf
      // SHOW_TOASTER: 'toaster_shown',
      FINISHED: 'idle'
    },
    toaster_shown: {
      FINISHED: 'idle'
    }
  };

  currentState: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private courseSearchService: CourseSearchService) {
  }

  ngOnInit(): void {
    this.currentState = 'start';
    this.refreshView();
    this.transition('WAIT');
  }

  transition(action: string, data?: any) {
    const nextState = this.STATES[this.currentState][action];

    if (nextState) {
      this.currentState = nextState;
      this.command(nextState, data);
    }
  }

  private command(nextState: string, data?: any) {
    switch (nextState) {
      case 'idle':
        break;
      case 'loading':
        this.subscribeToSearchResult(data);
        break;
      case 'list_populated':
        this.refreshView();
        this.populateList(data);
        this.transition('FINISHED');
        break;
      case 'toaster_shown':
        this.refreshView();
        this.showToaster(data);
        this.transition('FINISHED');
        break;
      default:
        break;
    }
  }

  private refreshView() {
    this.container.clear();
    const searchBoxComponent = this.addComponent(SearchBoxComponent);
    searchBoxComponent.searchTextEmitter.subscribe(text => this.transition('SEARCH', text));
  }

  private subscribeToSearchResult(text: string) {
    this.courseSearchService.findCourse(text)
      .subscribe(courses => {
        if (courses.length) {
          this.transition('RECEIVE_SUCCESS_RESULT', courses);
        } else {
          this.transition('RECEIVE_FAILURE_RESULT', 'No Matching Courses Found');
        }
      }, _ => this.transition('RECEIVE_FAILURE_RESULT', 'No Matching Courses Found'));
  }

  private populateList(courses) {
    const listComponent = this.addComponent(ListComponent);
    listComponent.data = courses;
    listComponent.fields = ['id', 'name'];
  }

  private showToaster(message: string) {
    const toasterComponent = this.addComponent(ToasterComponent);
    toasterComponent.message = message;
  }

  private handleNoMatchingCourse() {
    const toasterComponent = this.addComponent(ToasterComponent);
    toasterComponent.message = 'No Matching Courses Found';
  }

  private addComponent<T>(componentType: Type<T>): T {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    return this.container.createComponent(componentFactory).instance;
  }
}
