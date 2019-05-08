import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Checkequals} from '../../Shared/checkequals';
import {Replacer} from '../services/replacer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-opret-bruger',
  templateUrl: './opret-bruger.component.html',
  styleUrls: ['./opret-bruger.component.css']
})
export class OpretBrugerComponent implements OnInit {
  registrerForm: FormGroup;
  submitted = false;
  opretBruger: Bruger;
  genders = ['Mand', 'Kvinde', 'Andet'];

  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.registrerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    }, {
      validator: Checkequals('password', 'repeatPassword')
    });

  }

  get f() {return this.registrerForm.controls;}

  onOpretBruger() {
    this.submitted = true;
    if(this.registrerForm.invalid) {
      return
    }
    const jsonObj = JSON.stringify(this.registrerForm.value, Replacer);
    this.opretBruger = JSON.parse(jsonObj);

    this.brugerService.opretBruger(this.opretBruger)
      .subscribe(
        (response) => {
          console.log(response);
          if(response == true) {
            alert('Du er blevet oprettet! Log ind for at oprette en annonce\n\n (SKAL IKKE VÆRE HER)');
            this.router.navigate(['/log_ind']);
          }
        },
        (error) => console.log(error)
      );
  }

}
