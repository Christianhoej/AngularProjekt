import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AnnonceService} from '../annonce.service';
import {Annonce} from '../../models/annonce.model';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {HttpClient} from '@angular/common/http';
import {UploadBilleder} from '../../Shared/upload-billeder';
import * as _ from 'lodash';
import {Kategorier} from '../../startside/kategorier/kategorier.model';
import {BrugerService} from '../../bruger/services/bruger.service';
import {Replacer} from '../../bruger/services/replacer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {timestamp} from 'rxjs/operators';
import {UploadImageService} from '../uploadImage.service';
import {Subscription} from 'rxjs';
import {ImageModel} from '../image.model';


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
  subscription: Subscription;
  image: ImageModel;

  selectedFiles: FileList;
  currentUpload: UploadBilleder;

  // id: number;
  // editMode = false;
  // annonceForm: FormGroup;

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
   // this.image = new ImageModel('', '');
  }

  get f() {return this.registrerForm.controls; }

  valgtBillede(event) {
    this.billedet = event.target.files[0];
    this.uploadImageService.uploadImage(this.billedet).subscribe(
      (response) => {
        console.log(response);
        const res: any = response;
        this.image = new ImageModel(res.data.id, res.data.link);
        console.log(res.data.link);
      },
      (error) => console.log(error)
    )
  }

  // readThis(inputValue: any): void {
  //   var file:File = inputValue.files[0];
  //   var myReader: FileReader = new FileReader();
  //
  //   // myReader.onloadend = (e) => {
  //   //   this.image = myReader.result;
  //   //   console.log(this.image);
  //   //   console.log(file)
  //   // };
  //   myReader.readAsDataURL(file);
  //   console.log(file);
  //   this.uploadImageService.uploadImage(file).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.image = response;
  //       console.log(this.image.data.link);
  //     },
  //      (error) => console.log(error)
  //    )
  //
  // }

  uploadBillede() {
    // const fd = new FormData();
    // fd.append('image', this.billedet, this.billedet.name)

    this.http.post('https://api.imgur.com/3/upload?Client-ID=1cc04e1ddf61692',   this.billedet)
      .subscribe(event => { console.log(event); });
  }

  onOpretAnnonce() {
    this.submitted = true;
    if (this.registrerForm.invalid) {
      return;
    }

    const jsonObj = JSON.stringify(this.registrerForm.value);
    this.opretAnnonce = JSON.parse(jsonObj);
   /* this.today = new Date();
    this.opretAnnonce.date = this.today.toDateString().toString();
    console.log(this.opretAnnonce.date + 'DAAAATE')*/
    console.log(this.opretAnnonce.user);
    this.opretAnnonce.date = 'hej';
    this.opretAnnonce.user = this.brugerService.bruger;
    this.opretAnnonce.email = this.brugerService.bruger.email;
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

/*
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new UploadBilleder(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
*/
}
