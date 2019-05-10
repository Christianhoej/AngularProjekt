import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Checkequals} from '../../Shared/checkequals';
import {BrugerService} from '../services/bruger.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Bruger} from '../Models/bruger.model';
import {Replacer} from '../services/replacer.service';

@Component({
  selector: 'app-rediger-bruger',
  templateUrl: './rediger-bruger.component.html',
  styleUrls: ['./rediger-bruger.component.css']
})
export class RedigerBrugerComponent implements OnInit {
  redigerForm: FormGroup;
  submitted = false;
  bruger: Bruger;
  key: string;
  userid: string;
  redigerBruger: Bruger;


  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'userID';
          this.userid = params[this.key];
        });


    this.bruger = this.brugerService.bruger;
    this.redigerForm = this.formBuilder.group({
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

  get f() {return this.redigerForm.controls;}

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
    if(this.redigerForm.invalid) {
      return
    }

    this.redigerBruger = this.redigerForm.value;
    this.redigerBruger.userId = this.userid;
    console.log(this.redigerBruger.userId);
    this.brugerService.redigerBruger(this.redigerBruger)
      .subscribe(
        (response) => {
          this.router.navigate(['/min_side', this.brugerService.bruger.userId])
        }
      );

  }
}
