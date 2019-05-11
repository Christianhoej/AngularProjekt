import { Component, OnInit } from '@angular/core';
import {Bruger} from '../bruger.model';
import {BrugerService} from '../services/bruger.service';
import {Annonce} from '../../annonce/annonce.model';

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
