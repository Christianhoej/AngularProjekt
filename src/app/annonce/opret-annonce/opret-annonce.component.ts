import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AnnonceService} from '../services/annonce.service';
import {Annonce} from '../annonce.model';
import {KategoriService} from '../../startside/kategori/kategori.service';
import {HttpClient} from '@angular/common/http';
import {Kategori} from '../../startside/kategori/kategori.model';
import {BrugerService} from '../../bruger/services/bruger.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  kategorier: Kategori[];
  erLoggetInd: boolean;
  submitted = false;
  registrerForm: FormGroup;
  billedet: File;
  opretAnnonce: Annonce;
  today: Date;
  image = '';

  constructor(private annonceService: AnnonceService,
              private kategoriService: KategoriService,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private brugerService: BrugerService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.kategoriService.getKategorier()
      .subscribe(
        (kategorier: Kategori[]) => {this.kategorier = kategorier;
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

  onOpretAnnonce() {
    this.submitted = true;
    if (this.registrerForm.invalid || this.image === '') {
      return;
    }

    this.opretAnnonce = this.registrerForm.value;
    this.opretAnnonce.date = 'hej';
    this.opretAnnonce.user = this.brugerService.bruger;
    this.opretAnnonce.email = this.brugerService.bruger.email;
    this.opretAnnonce.imageURL = this.image;
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
