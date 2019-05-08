import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AnnonceService} from '../annonce.service';
import {Bruger} from '../../bruger/Models/bruger.model';

@Component ({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  id: string;
  annonce: Annonce;
 // @Input() index;
  key: string;
  bruger: Bruger;

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*this.annonce = this.annonceService.getAnnoncer();
    this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer; });*/
    this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'id';
          this.id = params[this.key];
          this.annonceService.getAnnonce(this.id)
            .subscribe(
              (annonce: Annonce) => {
                // JSON.parse(annonce, (key, value) => {
                //   if (typeof value 'Bruger') {
                //     return this.bruger = value;
                //   }
                //   return value;
                // });


                this.annonce = annonce;
               // this.annonce.bruger = annonce.bruger;
              }
            );
        }
      );
  }




}
