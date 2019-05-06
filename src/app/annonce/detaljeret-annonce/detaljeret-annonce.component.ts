import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AnnonceService} from '../annonce.service';

@Component ({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  id: number;
  annonce: Annonce;
  @Input() index;

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*this.annonce = this.annonceService.getAnnoncer();
    this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer; });*/
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
          this.annonceService.getAnnonce(this.index)
            .subscribe(
              (annonce: Annonce) => {this.annonce = annonce;
              }
            );
        }
      );
  }




}
