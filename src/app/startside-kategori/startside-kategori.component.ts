
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from './kategori.service';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../annonce/annonce.model';


@Component({
  selector: 'app-startside-kategori',
  templateUrl: './startside-kategori.component.html',
  styleUrls: ['./startside-kategori.component.css'],

})


export class StartsideKategoriComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
  //  this.subscription.unsubscribe();
  }

}
