import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from '../startside-kategori/kategori.service';
import {Annonce} from '../annonce/annonce.model';
import {AnnonceService} from '../annonce/annonce.service';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit {

  annoncer: Annonce[];
  subscription: Subscription;
  kategori = [];
  constructor(private kategoriService: KategoriService,
              private annonceService: AnnonceService) { }


  ngOnInit() {
    this.subscription = this.annonceService.annonceændret
      .subscribe(
        (annoncer: Annonce[]) => {
          this.annoncer = annoncer;
        }
      );
    this.annoncer = this.annonceService.getAnnoncer();
    this.kategori = this.kategoriService.getKategorier();
  }



}
