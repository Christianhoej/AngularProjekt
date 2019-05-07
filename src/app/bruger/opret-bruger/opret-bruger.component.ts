import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Checkequals} from '../../Shared/checkequals';

@Component({
  selector: 'app-opret-bruger',
  templateUrl: './opret-bruger.component.html',
  styleUrls: ['./opret-bruger.component.css']
})
export class OpretBrugerComponent implements OnInit {
  registrerForm: FormGroup;
  submitted = false;
  opretBruger: Bruger;
  gender = ['Mand', 'Kvinde', 'Andet'];

  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrerForm = this.formBuilder.group({
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

  }

  get f() {return this.registrerForm.controls;}



  onOpretBruger() {
    this.submitted = true;
    if(this.registrerForm.invalid) {
      return
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrerForm.value));

    //
    // // TODO først tjekke om de to passwordfelter er ens.
    // const email = form.value.emailOpret;
    // const kodeord = form.value.kodeordOpret;
    // const gentagetKodeord = form.value.kodeordGentagOpret;
    // const fodselsdag = form.value.fodselsdagOpret.toString(); // evt. gemme som string
    // const fornavn = form.value.fornavnOpret;
    // const efternavn = form.value.efternavnOpret;
    // const kon = form.value.konOpret;
    // const adresse = form.value.adresseOpret;
    // const telefon = form.value.telefonOpret;
    // const postnr = form.value.postnrOpret;
    //
    // this.opretBruger = new Bruger(fornavn, efternavn, email, kon, fodselsdag,
    //             adresse, postnr, telefon, kodeord);
    // this.brugerService.opretBruger(this.opretBruger)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
  }

}
