import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export interface Data {
  date: string;
  listName: string;
  noEntities: number;
  action: string[];
  description: string;
}

export const ELEMENT_DATA: Data[] = [
  {date: '1 May', listName: 'Hydrogen', noEntities: 1.0079, action: ['share'], description: ''},
  {date: '2 May', listName: 'Helium', noEntities: 4.0026, action: ['share'], description: 'Helium'},
  {date: '3 May', listName: 'Lithium', noEntities: 6.941, action: ['share'], description: 'Lithium'},
  {date: '4 May', listName: 'Beryllium', noEntities: 9.0122, action: ['share', 'delete'], description: 'Beryllium'},
  {date: '5 May', listName: 'Boron', noEntities: 10.811, action: ['share', 'delete'], description: 'Boron'},
  {date: '6 May', listName: 'Carbon', noEntities: 12.0107, action: ['share', 'delete'], description: 'Carbon'},
  {date: '7 May', listName: 'Nitrogen', noEntities: 14.0067, action: ['share', 'delete'], description: 'Nitrogen'},
  {date: '8 May', listName: 'Oxygen', noEntities: 15.9994, action: ['share', 'delete'], description: 'Oxygen'},
  {date: '9 May', listName: 'Fluorine', noEntities: 18.9984, action: ['share', 'delete'], description: 'Fluorine'},
  {date: '10 May', listName: 'Neon', noEntities: 20.1797, action: ['share', 'delete'], description: 'Neon'},
  {date: '7 May', listName: 'Nitrogen', noEntities: 14.0067, action: ['share', 'delete'], description: 'Nitrogen'},
  {date: '8 May', listName: 'Oxygen', noEntities: 15.9994, action: ['share', 'delete'], description: 'Oxygen'},
  {date: '9 May', listName: 'Fluorine', noEntities: 18.9984, action: ['share', 'delete'], description: 'Fluorine'},
  {date: '10 May', listName: 'Neon', noEntities: 20.1797, action: ['share', 'delete'], description: 'Neon'},
];

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  event = new Subject<Data>();
  filterEvent = new Subject<string>();

  constructor() { }

  filterData(filterKey: string){
    this.filterEvent.next(filterKey);
  }
}
