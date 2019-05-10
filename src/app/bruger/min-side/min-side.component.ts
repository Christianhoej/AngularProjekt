import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Annonce} from '../../models/annonce.model';
import {Checkequals} from '../../Shared/checkequals';
import {Replacer} from '../services/replacer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {
  gender = ['Mand', 'Kvinde', 'Andet'];
  mineAnnoncer: Annonce[];
  bruger: Bruger;


  constructor(private brugerService: BrugerService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.bruger = this.brugerService.bruger;
    this.brugerService.getMineAnnoncer(this.brugerService.bruger)
      .subscribe(
        (annoncer: Annonce[]) => {this.mineAnnoncer = annoncer;
        }
      );
  }
}
