import {Component, Input, OnInit, Output} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceService} from './annonce.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
 // annonce: Annonce;
  annoncer: Annonce[];
  private subscription: Subscription;
  @Input() annonce: Annonce;
  @Input() id: number;
  @Input() index: number;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {

    this.annonceService.getAnnoncer()
      .subscribe(
        (annoncer: Annonce[]) => {this.annoncer = annoncer;
        }
      );
    // this.annonceArr = this.annonceService.getAnnoncer();
    // this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer});
  }



}
