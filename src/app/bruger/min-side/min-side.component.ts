import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Annonce} from '../../models/annonce.model';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {
  gender = ['Mand', 'Kvinde', 'Andet'];
  mineAnnoncer: Annonce[];
  gentagKode: string;
  kode: string;
  constructor(private brugerService: BrugerService) { }
  bruger: Bruger;
  ngOnInit() {
    this.bruger = this.brugerService.bruger;
    this.brugerService.getMineAnnoncer()
      .subscribe(
        (annoncer: Annonce[]) => {this.mineAnnoncer = annoncer;
        }
      );
  }
  onRedigerBruger(form: NgForm) {
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
  }

  aendreKode(form: NgForm){

  }


}
