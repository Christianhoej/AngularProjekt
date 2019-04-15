import { Component, OnInit } from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceService} from './annonce.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonceArr: Annonce[];
  private subscription: Subscription;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
    this.annonceArr = this.annonceService.getAnnoncer();
    this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer});
  }

}
