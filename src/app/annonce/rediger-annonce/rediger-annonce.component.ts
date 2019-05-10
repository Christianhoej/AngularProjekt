import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Annonce} from '../../models/annonce.model';
import {AnnonceService} from '../annonce.service';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {Kategorier} from '../../startside/kategorier/kategorier.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-rediger-annonce',
  templateUrl: './rediger-annonce.component.html',
  styleUrls: ['./rediger-annonce.component.css']
})
export class RedigerAnnonceComponent implements OnInit {
  id: string;
  annonce: Annonce;
  nyAnnonce: Annonce;
  key: string;
  kategorier: Kategorier[];
  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private kategoriService: KategoriService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'id';
          this.id = params[this.key];
          this.annonceService.getAnnonce(this.id)
            .subscribe(
              (annonce: Annonce) => {
                this.annonce = annonce;
                this.annonce.email = this.annonce.user.email;
              }
            );
        }
      );

    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategorier[]) => {this.kategorier = kategorier;
        }
      );
  }

  onSubmit(form: NgForm) {
    this.nyAnnonce = this.annonce;
    this.nyAnnonce.category = form.value.kategori1;
    this.nyAnnonce.header = form.value.titel;
    this.nyAnnonce.price = form.value.pris;
    this.nyAnnonce.imageURL = form.value.imagePath;
    this.nyAnnonce.description = form.value.beskrivelse;
    console.log(this.nyAnnonce);

    this.annonceService.redigerAnnonce(this.nyAnnonce, this.id)
      .subscribe(
        (response) => {
          this.router.navigate(['/min_side'])
        },
      (error) => {console.log(error)}
      );

  }

  sletAnnonce(){
    this.annonceService.sletAnnonce(this.id)
      .subscribe(
        (respone) => {console.log(respone)},
        (error) => {console.log(error)}
      );
    this.router.navigate(['/min_side'])
  }

}
