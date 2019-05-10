import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Annonce} from '../../models/annonce.model';
import {AnnonceService} from '../annonce.service';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {Kategorier} from '../../startside/kategorier/kategorier.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BrugerService} from '../../bruger/services/bruger.service';

@Component({
  selector: 'app-rediger-annonce',
  templateUrl: './rediger-annonce.component.html',
  styleUrls: ['./rediger-annonce.component.css']
})
export class RedigerAnnonceComponent implements OnInit {
  submitted = false;
  redigerForm: FormGroup;
  id: string;
  billedet = null;
  annonce: Annonce;
  redigerAnnonce: Annonce;
  key: string;
  kategorier: Kategorier[];

  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private kategoriService: KategoriService,
              private router: Router,
              private brugerService: BrugerService,
              private formBuilder: FormBuilder) { }

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

    this.redigerForm = this.formBuilder.group({
      category: ['', Validators.required],
      header: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required],
      description: ['', Validators.required]}
      );

    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategorier[]) => {this.kategorier = kategorier;
        }
      );
  }

  get f() {return this.redigerForm.controls; }

  onRedigerAnnonce() {
    this.submitted = true;
    if (this.redigerForm.invalid) {
      return;
    }

    this.redigerAnnonce = this.redigerForm.value;
    this.redigerAnnonce.email = this.brugerService.bruger.email;
    this.redigerAnnonce.date = this.annonce.date;
    this.redigerAnnonce.user = this.brugerService.bruger;
    this.redigerAnnonce.adId = this.annonce.adId;

    this.annonceService.redigerAnnonce(this.redigerAnnonce)
      .subscribe(
        (response) => {
          this.router.navigate(['/min_side', this.brugerService.bruger.userId]);
        },
      (error) => {
          console.log(error);
        }
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
