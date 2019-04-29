import { Component, OnInit } from '@angular/core';
import {ItemdataService} from '../itemdata.service';
import {Annonce} from '../annonce/annonce.model';
import {AnnonceService} from '../annonce/annonce.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  annonceArr: Annonce[];
  items: object[];

  constructor(private itemdata: ItemdataService, private annonceService: AnnonceService) { }

  ngOnInit() {
    this.annonceArr = this.annonceService.getAnnoncer();
    // this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer});
  }


}
