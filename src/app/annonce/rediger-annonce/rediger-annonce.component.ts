import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Annonce} from '../annonce.model';
import {AnnonceService} from '../services/annonce.service';
import {KategoriService} from '../../startside/kategori/kategori.service';
import {Kategori} from '../../startside/kategori/kategori.model';
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
  billedet: File;
  annonce: Annonce;
  redigerAnnonce: Annonce;
  key: string;
  kategorier: Kategori[];
  image = '';

  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private kategoriService: KategoriService,
              private router: Router,
              private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              ) { }

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
                this.image = annonce.imageURL;
                this.annonce.email = this.annonce.user.email;
              }
            );
        }
      );

    this.redigerForm = this.formBuilder.group({
      category: ['', Validators.required],
      header: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]}
      );

    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategori[]) => {this.kategorier = kategorier;
        }
      );
  }

  get f() {return this.redigerForm.controls; }

  valgtBillede(event) {
    this.billedet = event.target.files[0];
    this.annonceService.uploadImage(this.billedet).subscribe(
      (response) => {
        console.log(response);
        const res: any = response;
        this.image = res.data.link;
        console.log(res.data.link);
      },
      (error) => console.log(error)
    )
  }

  onRedigerAnnonce() {
    this.submitted = true;
    if (this.redigerForm.invalid || this.image === '') {
      return;
    }

    this.redigerAnnonce = this.redigerForm.value;
    this.redigerAnnonce.email = this.brugerService.bruger.email;
    this.redigerAnnonce.date = this.annonce.date;
    this.redigerAnnonce.user = this.brugerService.bruger;
    this.redigerAnnonce.adId = this.annonce.adId;
    this.redigerAnnonce.imageURL = this.image;

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
    this.router.navigate(['/min_side']);
  }

}
