import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AnnonceService} from '../annonce.service';
import {Annonce} from '../annonce.model';
import {KategoriService} from '../../startside-kategori/kategori.service';
import {MaterialeService} from '../../startside-kategori/materiale.service';
import {HttpClient} from '@angular/common/http';
import {UploadBilleder} from '../Shared/upload-billeder';
import * as _ from 'lodash';


@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  kategori: string[];
  materiale: string[];

  billedet = null;

  selectedFiles: FileList;
  currentUpload: UploadBilleder;

  // id: number;
  // editMode = false;
  // annonceForm: FormGroup;

  constructor(private annonceService: AnnonceService,
              private kategoriService: KategoriService,
              private materialeService: MaterialeService,
              private http: HttpClient,
              ) { }

  ngOnInit() {
    this.kategori = this.kategoriService.getKategorier();
    this.materiale = this.materialeService.getMaterialer();

  }

  valgtBillede(event) {
    this.billedet = event.target.files[0];
  }

  uploadBillede() {
    // const fd = new FormData();
    // fd.append('image', this.billedet, this.billedet.name)

    this.http.post('https://api.imgur.com/3/upload?Client-ID=1cc04e1ddf61692',   this.billedet)
      .subscribe(event => { console.log(event); });

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
    const nyAnnonce = new Annonce(value.titel, value.pris, value.imagePath, value.beskrivelse, value.kategori, value.materiale, value.id);
    this.annonceService.addAnnonce(nyAnnonce);
  }
}
