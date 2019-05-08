import {Component, Input, OnInit, Output} from '@angular/core';
import {KategoriService} from './kategori.service';
import {Kategorier} from './kategorier.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Annonce} from '../../models/annonce.model';
import {AnnonceService} from '../../annonce/annonce.service';

@Component({
  selector: 'app-kategorier',
  templateUrl: './kategorier.component.html',
  styleUrls: ['./kategorier.component.css']
})
export class KategorierComponent implements OnInit {

  kategoriArr: Kategorier[];
  @Output() kategorien: string;
  @Input() id: string;
  @Input() kategori: Kategorier;
  key: string;

  constructor(private kategoriService: KategoriService,
              private route: ActivatedRoute,
              private router: Router,
              private annoncerService: AnnonceService) { }

  ngOnInit() {

  }

  kategoriValgt(kategoriValgt: string) {
    this.kategoriService.kategoriValgt.next(kategoriValgt);
  }

}
