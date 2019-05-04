
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from '../startside/kategorier/kategori.service';
import {Annonce} from '../annonce/annonce.model';
import {AnnonceService} from '../annonce/annonce.service';


@Component ({
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
    /*this.annonceService.getAnnoncer().subscribe(
      (annoncer: Annonce[]) => {this.annoncer = annoncer;
      }
    );*/
    this.kategori = this.kategoriService.getKategorier();
  }

  ngOnDestroy(): void {
  //  this.subscription.unsubscribe();
  }

}
