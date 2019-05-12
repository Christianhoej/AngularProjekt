import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
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

    this.route.data
      .subscribe(
        (data: Data) => {
          this.annonce = data['annonce'];
          this.annonce.email = this.annonce.user.email;
        },
        (error) => {alert(error.error.fix + '\n' + error.error.message);}
      );
  }




}
