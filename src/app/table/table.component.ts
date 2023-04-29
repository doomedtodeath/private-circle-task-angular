import {Component, OnInit} from '@angular/core';
import {Data, ELEMENT_DATA, SharedService} from "../../shared.service";
import {cloneDeep} from 'lodash';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['date', 'listName', 'noEntities', 'actions', 'details'];
  dataSource = new MatTableDataSource();
  iconMapped: any = {
    share: 'share',
    delete: 'delete'
  }
  selectedRow = '';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(){
    this.dataSource.data = cloneDeep(ELEMENT_DATA);
    this.sharedService.filterEvent.subscribe((key: string) => {
      this.dataSource.filter = key.trim().toLowerCase();
    })
  }

  showDetails(element: Data){
    this.selectedRow = element.listName;
    console.log(this.selectedRow);
    this.sharedService.event.next(element)
  }

  log(row: any){
    console.log(row)
  }
}
