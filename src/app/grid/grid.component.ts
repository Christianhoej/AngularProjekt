import { Component, OnInit } from '@angular/core';
import {ItemdataService} from '../itemdata.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  items: object;

  constructor(private itemdata: ItemdataService) { }

  ngOnInit() {
    this.itemdata.getItems().subscribe(data => {
        this.items = data;
        console.log(this.items);
      }
    );
  }


}
