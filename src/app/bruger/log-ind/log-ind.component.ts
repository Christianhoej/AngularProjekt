import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BrugerService} from '../services/bruger.service';
import {Bruger} from '../Models/bruger.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-ind',
  templateUrl: './log-ind.component.html',
  styleUrls: ['./log-ind.component.css']
})
export class LogIndComponent implements OnInit {
  logindForm: FormGroup;
  submitted = false;
  errorLogind: string;
  logindOK: boolean = true;
  constructor(private brugerService: BrugerService,
              private router: Router,
              private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.logindForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, ]
    })
  }

  get f() {return this.logindForm.controls;}

  onLogIndPressed() {
    this.submitted = true;
    if(this.logindForm.invalid) {
      return;
    }
    this.brugerService.logind(this.logindForm.value.email, this.logindForm.value.password)
      .subscribe(
        (bruger: Bruger) => {
          this.logindOK=true;
          this.brugerService.bruger = bruger;
          this.brugerService.loggetInd=true;
          this.brugerService.loggetIndSubject.next(true);
          // if(this.brugerService.bruger!=null){
          //   console.log('kommet ind!');
          //   this.brugerService.loggetInd.next(true);
          // }
          this.router.navigate(['/startside']);
          },
        (error) => {
          this.errorLogind = error.error.fix;
          this.logindOK = false;
        }
      );
  }

}
