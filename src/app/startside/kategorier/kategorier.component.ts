import {Component, Input, OnInit} from '@angular/core';
import {KategoriService} from './kategori.service';
import {Kategorier} from './kategorier.model';

@Component({
  selector: 'app-kategorier',
  templateUrl: './kategorier.component.html',
  styleUrls: ['./kategorier.component.css']
})
export class KategorierComponent implements OnInit {

  kategoriArr: Kategorier[];
  @Input() kategoriIndex: Kategorier;
  @Input() kategoriInput: Kategorier;

  constructor(private kategoriService: KategoriService) { }

  ngOnInit() {
    this.kategoriArr = this.kategoriService.getKategorier();
  }

}
