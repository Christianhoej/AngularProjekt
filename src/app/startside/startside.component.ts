import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from './kategorier/kategori.service';
import {Kategorier} from './kategorier/kategorier.model';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../models/annonce.model';
import {ActivatedRoute} from '@angular/router';
import {BrugerService} from '../bruger/services/bruger.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit, OnDestroy {

  headerComponent: HeaderComponent;
  annoncer: Annonce[];
  kategorier: Kategorier[];
  subscription: Subscription;
  erLoggetInd = false;
  @Input() valgtKategori;
  constructor(private kategoriService: KategoriService,
              private brugerService: BrugerService,
              private annonceService: AnnonceService) {
    /*
    this.subscription = this.brugerService.loggetInd.subscribe(
    (logind: boolean) => {
      if (logind) {
        this.erLoggetInd = true;
      } else {
        this.erLoggetInd = false;
      }
    }
  );*/
  }

  ngOnInit() {
    this.subscription = this.kategoriService.kategoriValgt
      .subscribe(
      (valgt: string) => {
        if(valgt=='Alle' || valgt==''){
          this.annonceService.getAnnoncer()
            .subscribe(
              (annoncer: Annonce[]) => {
                this.annoncer = annoncer;
              }
            );
        } else {
          this.annonceService.filtrerAnnonce(valgt)
            .subscribe(
              (annoncer: Annonce[]) => {
                this.annoncer = annoncer;
              }
            );
        }
      }
      );

    this.annonceService.getAnnoncer()
      .subscribe(
        (annoncer: Annonce[]) => {this.annoncer = annoncer;
        }
      );
    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategorier[]) => {this.kategorier = kategorier;
        this.kategorier.unshift({categoryName: 'Alle', id: -1});
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
/*
  logind() {
    if (this.erLoggetInd1 = true) {
      this.erLoggetInd1 = false;
      this.brugerService.bruger=null;
    }
  }

  getErLoggetInd($event){
    this.erLoggetInd = $event;
  }

*/
}
