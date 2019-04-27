import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startside-kategori-valgt',
  templateUrl: './startside-kategori-valgt.component.html',
  styleUrls: ['./startside-kategori-valgt.component.css']
})
export class StartsideKategoriValgtComponent implements OnInit {

  kategoriItems = ['Træ', 'Jern', 'Ler', 'Andet'];

  constructor() { }

  ngOnInit() {
  }



}
