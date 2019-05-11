import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Annonce} from '../../models/annonce.model';
import {AnnonceService} from '../annonce.service';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {Kategorier} from '../../startside/kategorier/kategorier.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BrugerService} from '../../bruger/services/bruger.service';
import {ImageModel} from '../image.model';
import {UploadImageService} from '../uploadImage.service';

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
  kategorier: Kategorier[];
  image: ImageModel = new ImageModel('','');

  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private kategoriService: KategoriService,
              private router: Router,
              private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              private uploadImageService: UploadImageService) { }

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
                this.image.link = annonce.imageURL;
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

  valgtBillede(event) {
    this.billedet = event.target.files[0];
    this.uploadImageService.uploadImage(this.billedet).subscribe(
      (response) => {
        console.log(response);
        const res: any = response;
        this.image.id = res.data.is;
        this.image.link = res.data.link;
        console.log(res.data.link);
      },
      (error) => console.log(error)
    )
  }

  onRedigerAnnonce() {
    this.submitted = true;
    if (this.redigerForm.invalid || this.image.link == '') {
      return;
    }

    this.redigerAnnonce = this.redigerForm.value;
    this.redigerAnnonce.email = this.brugerService.bruger.email;
    this.redigerAnnonce.date = this.annonce.date;
    this.redigerAnnonce.user = this.brugerService.bruger;
    this.redigerAnnonce.adId = this.annonce.adId;
    this.redigerAnnonce.imageURL = this.image.link;

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
