
import {Component, Input, OnInit} from '@angular/core';

import {Annonce} from '../annoncetest.model';
import {AnnoncetestService} from '../annoncetest.service';

@Component({
  selector: 'app-startside-kategori-valgt',
  templateUrl: './startside-kategori-valgt.component.html',
  styleUrls: ['./startside-kategori-valgt.component.css']
})
export class StartsideKategoriValgtComponent implements OnInit {

  @Input() index: number;
  @Input() annonce: Annonce;


  kategoriItems = ['Træ', 'Jern', 'Ler', 'Andet'];
  annoncer: Annonce[];

  constructor(private annonceService: AnnoncetestService) { }

  ngOnInit() {
    this.annoncer = this.annonceService.getAnnoncer();
  }



}
