import { Component, OnInit } from '@angular/core';
import {AnnoncetestService} from './annoncetest.service';

@Component({
  selector: 'app-startside-kategori',
  templateUrl: './startside-kategori.component.html',
  styleUrls: ['./startside-kategori.component.css'],
  providers: [AnnoncetestService]
})
export class StartsideKategoriComponent implements OnInit {

  kategori = ['Nips', 'Møbler', 'Ler', 'Strik', 'Kunst', 'Til børn', 'Andet '];

  constructor() { }

  ngOnInit() {
  }

}
