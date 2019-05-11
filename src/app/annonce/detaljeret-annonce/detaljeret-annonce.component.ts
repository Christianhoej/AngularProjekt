import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AnnonceService} from '../services/annonce.service';
import {Bruger} from '../../bruger/bruger.model';

@Component ({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  id: string;
  annonce: Annonce;
  key: string;
  bruger: Bruger;

  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
     this.route.params
      .subscribe(
        (params: Params) => {
          this.key = 'id';
          this.id = params[this.key];
          this.annonceService.getAnnonce(this.id)
            .subscribe(
              (annonce: Annonce) => {

                this.annonce = annonce;
                this.annonce.email = this.annonce.user.email;
              }
            );
        }
      );
  }




}
