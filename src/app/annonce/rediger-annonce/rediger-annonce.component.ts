import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Annonce} from '../../models/annonce.model';
import {AnnonceService} from '../annonce.service';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {Kategorier} from '../../startside/kategorier/kategorier.model';

@Component({
  selector: 'app-rediger-annonce',
  templateUrl: './rediger-annonce.component.html',
  styleUrls: ['./rediger-annonce.component.css']
})
export class RedigerAnnonceComponent implements OnInit {
  id: string;
  annonce: Annonce;
  key: string;
  kategorier: Kategorier[];
  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private kategoriService: KategoriService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'id';
          this.id = params[this.key];
          this.annonceService.getAnnonce(this.id)
            .subscribe(
              (annonce: Annonce) => {this.annonce = annonce;
              }
            );
        }
      );
    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategorier[]) => {this.kategorier = kategorier;
        }
      )


  }

}
