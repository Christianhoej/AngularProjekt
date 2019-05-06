import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OpretBrugerModel} from '../Models/OpretBruger.model';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-opret-bruger',
  templateUrl: './opret-bruger.component.html',
  styleUrls: ['./opret-bruger.component.css']
})
export class OpretBrugerComponent implements OnInit {

  opretBruger: OpretBrugerModel;

  constructor(private configService: ConfigService) { }

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

    this.opretBruger = new OpretBrugerModel(fornavn, efternavn, email, kon, fodselsdag,
                adresse, postnr, telefon, kodeord);
    this.configService.opretBruger(this.opretBruger)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
