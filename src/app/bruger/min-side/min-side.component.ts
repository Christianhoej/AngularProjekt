import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Annonce} from '../../models/annonce.model';
import {Checkequals} from '../../Shared/checkequals';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {
  aendreForm: FormGroup;
  submitted = false;
  gender = ['Mand', 'Kvinde', 'Andet'];
  mineAnnoncer: Annonce[];
  gentagKode: string;
  kode: string;
  bruger: Bruger;


  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.aendreForm = this.formBuilder.group({
      fornavnOpret: ['', Validators.required],
      efternavnOpret: ['', Validators.required],
      fodselsarOpret: ['', Validators.required],
      konOpret: ['', Validators.required],
      adresseOpret: ['', Validators.required],
      postnrOpret: ['', Validators.required],
      tlfnrOpret: ['', Validators.required],
      emailOpret: ['', [Validators.required, Validators.email]],
      kodeordOpret: ['', [Validators.required, Validators.minLength(6)]],
      gentagKodeordOpret: ['', Validators.required]
    }, {
      validator: Checkequals('kodeordOpret', 'gentagKodeordOpret')
    });

    this.bruger = this.brugerService.bruger;
    this.brugerService.getMineAnnoncer()
      .subscribe(
        (annoncer: Annonce[]) => {this.mineAnnoncer = annoncer;
        }
      );
  }

  get f() {return this.aendreForm.controls;}

  onRedigerBruger(form: NgForm) {
    /*
    const email = form.value.emailOpret;
    const kodeord = form.value.kodeordOpret;
    const gentagetKodeord = form.value.kodeordGentagOpret;
    const fodselsdag = form.value.fodselsdagOpret.toString(); // evt. gemme som string
    const fornavn = form.value.fornavnOpret;
    const efternavn = form.value.efternavnOpret;
    const kon = form.value.konOpret;
    const adresse = form.value.adresseOpret;
    const telefon = form.value.telefonOpret;
    const postnr = form.value.postnrOpret;

    this.bruger = new Bruger(fornavn, efternavn, email, kon, fodselsdag,
      adresse, postnr, telefon, kodeord);


    this.brugerService.redigerBruger(this.bruger)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      */
    this.submitted = true;
    if(this.aendreForm.invalid) {
      return
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.aendreForm.value));

  }

  aendreKode(form: NgForm){

  }


}
