import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from './kategorier/kategori.service';
import {Kategorier} from './kategorier/kategorier.model';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../models/annonce.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit {

  annoncer: Annonce[];
  kategorier: Kategorier[];
  @Input() valgtKategori;
  constructor(private kategoriService: KategoriService,
              private annonceService: AnnonceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.kategoriService.kategoriValgt
      .subscribe(
      (valgt: string) => {
        if(valgt==''){
          this.annonceService.getAnnoncer()
            .subscribe(
              (annoncer: Annonce[]) => {this.annoncer = annoncer;
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
        }
      );
  }



}
