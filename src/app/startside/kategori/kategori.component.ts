import {Component, Input, OnInit, Output} from '@angular/core';
import {KategoriService} from './kategori.service';
import {Kategori} from './kategori.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../../annonce/services/annonce.service';

@Component({
  selector: 'app-kategorier',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  kategoriArr: Kategori[];
  @Output() kategorien: string;
  @Input() id: string;
  @Input() kategori: Kategori;
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
