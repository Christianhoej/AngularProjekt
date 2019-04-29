import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {Subscription} from 'rxjs';
import {AnnonceService} from '../annonce.service';

@Component({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  annonceArr: Annonce[];
  private subscription: Subscription;
  @Input() annonce: Annonce;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
    this.annonceArr = this.annonceService.getAnnoncer();
    this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer; });
  }

}
