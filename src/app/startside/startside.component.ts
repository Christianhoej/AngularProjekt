import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {KategoriService} from './kategorier/kategori.service';
import {Kategorier} from './kategorier/kategorier.model';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../models/annonce.model';
import {ActivatedRoute, Data} from '@angular/router';
import {BrugerService} from '../bruger/services/bruger.service';
import {HeaderComponent} from '../header/header.component';
import {AnnonceListResolver} from '../annonce/annonce-list-resolver.service';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit, OnDestroy {

  headerComponent: HeaderComponent;
  annoncer: Observable<Array<any>>;
  kategorier: Kategorier[];
  subscription: Subscription;
  @Input() valgtKategori;
  constructor(private kategoriService: KategoriService,
              private brugerService: BrugerService,
              private annonceService: AnnonceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.kategoriService.kategoriValgt
      .subscribe(
      (valgt: string) => {
        if(valgt=='Alle' || valgt==''){
          /*this.route.data
            .subscribe(
              (data: Data[]) => {
                this.annoncer = data['annoncer'];
              }
            );
          /**/
          this.annonceService.getAnnoncer()
            .subscribe(
              (annoncer: any) => {
                this.annoncer = annoncer;
              }
            );
        } else {
          this.annonceService.filtrerAnnonce(valgt)
            .subscribe(
              (annoncer: any) => {
                this.annoncer = annoncer;
              }
            );
        }
      }
      );

    this.annonceService.getAnnoncer()
      .subscribe(
        (annoncer: any) => {this.annoncer = annoncer;
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
}
