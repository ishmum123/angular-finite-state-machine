import {Course, Teacher} from './entities';

export const TEACHERS: Teacher[] = [
  {id: '1', name: 'Mr. Mathew'},
  {id: '2', name: 'Mr. Anderson'},
  {id: '3', name: 'Mr. Peterson'},
];

export const COURSES: Course[] = [
  {id: '1', name: 'Physics', teacherId: '1'},
  {id: '2', name: 'Mathematics', teacherId: '1'},
  {id: '3', name: 'Chemistry', teacherId: '2'},
  {id: '4', name: 'Biology', teacherId: '3'},
];
