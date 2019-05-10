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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      phonenumber: ['', Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    }, {
      validator: Checkequals('password', 'repeatPassword')
    });
  }

  get f() {return this.redigerForm.controls;}

  onRedigerBruger() {
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
    if (this.redigerForm.invalid) {
      return;
    }

    this.redigerBruger = this.redigerForm.value;
    this.redigerBruger.userId = this.userid;
    console.log(this.redigerBruger.address);
    this.brugerService.redigerBruger(this.redigerBruger)
      .subscribe(
        (response) => {
          this.router.navigate(['/min_side', this.brugerService.bruger.userId]);
        }
      );

  }
}
