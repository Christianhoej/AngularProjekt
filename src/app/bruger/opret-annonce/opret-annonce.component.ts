import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AnnonceService} from '../../annonce/annonce.service';
import {Annonce} from '../../models/annonce.model';
import {KategoriService} from '../../startside/kategorier/kategori.service';
import {HttpClient} from '@angular/common/http';
import {UploadBilleder} from '../../Shared/upload-billeder';
import * as _ from 'lodash';
import {Kategorier} from '../../startside/kategorier/kategorier.model';
import {BrugerService} from '../services/bruger.service';
import {Replacer} from '../services/replacer.service';
import {Router} from '@angular/router';
import {timestamp} from 'rxjs/operators';


@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  kategorier: Kategorier[];
  materiale: string[];
  erLoggetInd: boolean;
  submitted = false;
  registrerForm: FormGroup;
  billedet = null;
  opretAnnonce: Annonce;
  today: Date;

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
              private router: Router
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
      description: ['', Validators.required],

    }) ;
  }

  get f() {return this.registrerForm.controls; }

  valgtBillede(event) {
    this.billedet = event.target.files[0];
  }

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
    this.opretAnnonce.email = this.brugerService.bruger.email;
    console.log(this.opretAnnonce.description)
    this.annonceService.opretAnnonce(this.opretAnnonce)
      .subscribe(
        (response) => {
          console.log(response);
          if ( response === true) {
            alert('Du er blevet oprettet! Log ind for at oprette en annonce\n\n (SKAL IKKE VÆRE HER)');
            this.router.navigate(['/min_side']);
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
  onSubmit(form: NgForm) {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    /*if (this.editMode) {
      this.annonceService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();*/
    const value = form.value;
   // const nyAnnonce = new Annonce(value.titel, value.pris, value.imagePath, value.beskrivelse, value.kategori, value.materiale, value.id);
  //  this.annonceService.addAnnonce(nyAnnonce);
  }
}
