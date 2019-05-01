import { Component, OnInit } from '@angular/core';
import {Annonce} from '../startside-kategori/annoncetest.model';
import {Subscription} from 'rxjs';
import {KategoriService} from './kategorier/kategori.service';
import {AnnoncetestService} from '../startside-kategori/annoncetest.service';
import {Kategorier} from './kategorier/kategorier.model';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit {

  annoncer: Annonce[];
  subscription: Subscription;
  kategorier: Kategorier[];
  constructor(private kategoriService: KategoriService,
              private annonceService: AnnoncetestService) { }


  ngOnInit() {
    this.subscription = this.annonceService.annonceændret
      .subscribe(
        (annoncer: Annonce[]) => {
          this.annoncer = annoncer;
        }
      );
    this.annoncer = this.annonceService.getAnnoncer();
    this.kategorier = this.kategoriService.getKategorier();
  }



}
