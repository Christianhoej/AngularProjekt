import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';

@Component({
  selector: 'app-mine-annoncer',
  templateUrl: './mine-annoncer.component.html',
  styleUrls: ['./mine-annoncer.component.css']
})
export class MineAnnoncerComponent implements OnInit {

  @Input() minAnnonce: Annonce;
  @Input() id: number;
  @Input() index: number

  constructor() { }

  ngOnInit() {

  }

}
