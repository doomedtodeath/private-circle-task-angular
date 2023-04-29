import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  description = '';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(){
    this.sharedService.event.subscribe((element)=>{
      this.description = element.description;
    })
  }

}
