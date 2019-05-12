import {Component, Input, OnInit, Output} from '@angular/core';
import {KategoriService} from './kategori.service';
import {Kategori} from './kategori.model';
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

  constructor(private kategoriService: KategoriService) { }

  ngOnInit() {

  }

  kategoriValgt(kategoriValgt: string) {
    this.kategoriService.kategoriValgt.next(kategoriValgt);
  }

}
