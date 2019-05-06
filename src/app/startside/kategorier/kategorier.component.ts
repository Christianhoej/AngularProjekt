import {Component, Input, OnInit} from '@angular/core';
import {KategoriService} from './kategori.service';
import {Kategorier} from './kategorier.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Annonce} from '../../annonce/annonce.model';

@Component({
  selector: 'app-kategorier',
  templateUrl: './kategorier.component.html',
  styleUrls: ['./kategorier.component.css']
})
export class KategorierComponent implements OnInit {

  kategoriArr: Kategorier[];
  id: number;
  @Input() kategoriIndex: Kategorier;
  @Input() kategoriInput: Kategorier;
  key: string;

  constructor(private kategoriService: KategoriService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {



    this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'id';
          this.id = +params[this.key];
          console.log(this.id);
        }
      );
  }

}
