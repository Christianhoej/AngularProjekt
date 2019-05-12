import {Component, Input, OnInit, Output} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceService} from './services/annonce.service';
import {Subscription} from 'rxjs';
import {Bruger} from '../bruger/bruger.model';

@Component ({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  @Input() annonce: Annonce;
  @Input() bruger: Bruger;
  @Input() id: number;


  constructor() { }

  ngOnInit() {

  }



}
