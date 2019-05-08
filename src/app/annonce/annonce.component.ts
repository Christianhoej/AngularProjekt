import {Component, Input, OnInit, Output} from '@angular/core';
import {Annonce} from '../models/annonce.model';
import {AnnonceService} from './annonce.service';
import {Subscription} from 'rxjs';
import {Bruger} from '../bruger/Models/bruger.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
 // annonce: Annonce;
  //annoncer: Annonce[];
  @Input() annonce: Annonce;
  @Input() bruger: Bruger;
  @Input() id: number;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }



}
