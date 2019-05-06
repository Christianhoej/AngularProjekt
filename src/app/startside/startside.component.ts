import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KategoriService} from './kategorier/kategori.service';
import {Kategorier} from './kategorier/kategorier.model';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../annonce/annonce.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.css']
})
export class StartsideComponent implements OnInit {

  annoncer: Annonce[];
  subscription: Subscription;
  kategorier: Kategorier[];
  @Input() valgtKategori;
  constructor(private kategoriService: KategoriService,
              private annonceService: AnnonceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
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
