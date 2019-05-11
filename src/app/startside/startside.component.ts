import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {KategoriService} from './kategori/kategori.service';
import {Kategori} from './kategori/kategori.model';
import {AnnonceService} from '../annonce/services/annonce.service';
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
  annoncer: Observable<Array<any>>;
  kategorier: Kategori[];
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
        if (valgt === 'Alle' || valgt === '') {
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
        (kategorier: Kategori[]) => {
          this.kategorier = kategorier;
          this.kategorier.unshift({categoryName: 'Alle', id: -1});
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
