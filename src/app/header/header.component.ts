import { Component } from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) {
  }

  onSearch($event: any){
    this.sharedService.filterData($event.target.value);
  }
}
