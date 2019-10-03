import {Injectable} from '@angular/core';
import {Course} from '../../entities';
import {COURSES} from '../../sample-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseSearchService {

  findCourse(name: string): Observable<Course[]> {
    return of(COURSES.filter(course => course.name.includes(name)));
  }
}
