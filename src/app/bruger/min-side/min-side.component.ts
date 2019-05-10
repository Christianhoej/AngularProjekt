import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Bruger} from '../Models/bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Annonce} from '../../models/annonce.model';
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


  constructor(private brugerService: BrugerService) { }

  ngOnInit() {
    this.bruger = this.brugerService.bruger;
    this.brugerService.getMineAnnoncer(this.brugerService.bruger)
      .subscribe(
        (annoncer: Annonce[]) => {this.mineAnnoncer = annoncer;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
