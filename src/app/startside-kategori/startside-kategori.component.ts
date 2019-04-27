import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startside-kategori',
  templateUrl: './startside-kategori.component.html',
  styleUrls: ['./startside-kategori.component.css']
})
export class StartsideKategoriComponent implements OnInit {

  kategori = ['Nips', 'Møbler', 'Strik', 'Til børn', 'Andet '];
  constructor() { }

  ngOnInit() {
  }

}
