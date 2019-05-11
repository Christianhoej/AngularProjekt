import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AnnonceService} from '../annonce/annonce.service';
import {Annonce} from '../models/annonce.model';
import {KategoriService} from '../startside/kategorier/kategori.service';
import {HttpClient} from '@angular/common/http';
import {UploadBilleder} from '../Shared/upload-billeder';
import * as _ from 'lodash';
import {Kategorier} from '../startside/kategorier/kategorier.model';
import {BrugerService} from '../bruger/services/bruger.service';
import {Replacer} from '../bruger/services/replacer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {timestamp} from 'rxjs/operators';
import {UploadImageService} from '../annonce/uploadImage.service';
import {Subscription} from 'rxjs';
import {ImageModel} from '../annonce/image.model';


@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  kategorier: Kategorier[];
  erLoggetInd: boolean;
  submitted = false;
  registrerForm: FormGroup;
  billedet: File;
  opretAnnonce: Annonce;
  today: Date;
  image: ImageModel = new ImageModel('','');

  constructor(private annonceService: AnnonceService,
              private kategoriService: KategoriService,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private brugerService: BrugerService,
              private router: Router,
              private route: ActivatedRoute,
              private uploadImageService: UploadImageService,

              ) { }

  ngOnInit() {
    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategorier[]) => {this.kategorier = kategorier;
        }
      );
    this.registrerForm = this.formBuilder.group({
      category: ['', Validators.required],
      header: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required],
      description: ['', Validators.required]}
      ) ;
  }

  get f() {return this.registrerForm.controls; }

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

  onOpretAnnonce() {
    this.submitted = true;
    if (this.registrerForm.invalid || this.image.link == '') {
      return;
    }

    this.opretAnnonce = this.registrerForm.value;
    this.opretAnnonce.date = 'hej';
    this.opretAnnonce.user = this.brugerService.bruger;
    this.opretAnnonce.email = this.brugerService.bruger.email;
    this.opretAnnonce.imageURL = this.image.link;
    this.annonceService.opretAnnonce(this.opretAnnonce)
      .subscribe(
        (response) => {
          if ( response ) {
            alert('ORPETTET\n\n (SKAL IKKE VÆRE HER)');
            this.router.navigate(['/startside']);
          }
        },
        (error) => console.log(error)
      );
  }
}
