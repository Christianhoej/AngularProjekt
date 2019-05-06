import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OpretBrugerModel} from '../Models/OpretBruger.model';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {
  gender = ['Mand', 'Kvinde', 'Andet'];
  test = 'hello';
  constructor() { }
  bruger: OpretBrugerModel;
  ngOnInit() {
    this.bruger = new OpretBrugerModel('Gunn', 'Hentze', 'dagf@sdf.sd', 'Kvinde',
      '1992', 'Dalslandsgade 8G', '2300', '93911125');
  }
  onRedigerBruger(form: NgForm) {

  }

}
