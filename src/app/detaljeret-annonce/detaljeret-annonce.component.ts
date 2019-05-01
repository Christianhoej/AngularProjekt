import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce/annonce.model';
import {Subscription} from 'rxjs';
import {AnnonceService} from '../annonce/annonce.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  annonceArr: Annonce[];
  id: number;
  annonce: Annonce;

  private subscription: Subscription;


  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.annonceArr = this.annonceService.getAnnoncer();
    this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer; });
    /*this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.annonce = this.annonceService.getAnnonce(this.id);
        }
      );*/
  }




}
