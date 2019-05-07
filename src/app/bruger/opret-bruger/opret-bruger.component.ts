import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';

@Component({
  selector: 'app-opret-bruger',
  templateUrl: './opret-bruger.component.html',
  styleUrls: ['./opret-bruger.component.css']
})
export class OpretBrugerComponent implements OnInit {

  opretBruger: Bruger;
  gender = ['Mand', 'Kvinde', 'Andet'];

  constructor(private brugerService: BrugerService) { }

  ngOnInit() {
  }
  onOpretBruger(form: NgForm) {
    // TODO først tjekke om de to passwordfelter er ens.
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

    this.opretBruger = new Bruger(fornavn, efternavn, email, kon, fodselsdag,
                adresse, postnr, telefon, kodeord);
    this.brugerService.opretBruger(this.opretBruger)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
