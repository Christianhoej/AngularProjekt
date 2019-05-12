import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckequalsFunction} from '../checkequals.function';
import {BrugerService} from '../services/bruger.service';
import {Router} from '@angular/router';
import {Bruger} from '../bruger.model';

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
  redigerBruger: Bruger;


  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.bruger = this.brugerService.bruger;
    this.redigerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', [Validators.required, Validators.min(1900), Validators.max(2001)]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      phonenumber: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    }, {
      validator: CheckequalsFunction('password', 'repeatPassword')
    });
  }

  get f() {return this.redigerForm.controls;}

  onRedigerBruger() {
    this.submitted = true;
    if (this.redigerForm.invalid) {
      return;
    }

    this.redigerBruger = this.redigerForm.value;
    this.redigerBruger.userId = this.brugerService.bruger.userId;
    this.brugerService.redigerBruger(this.redigerBruger)
      .subscribe(
        (response) => {
          alert('Brugeren blev redigeret.');
          this.router.navigate(['/min_side', this.brugerService.bruger.userId]);
        },
        (error) => {alert(error.error.fix + '\n' + error.error.message);}
      );

  }
}
