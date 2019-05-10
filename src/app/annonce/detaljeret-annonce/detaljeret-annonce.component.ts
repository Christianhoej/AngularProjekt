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
   // this.annonce = new Annonce('', 0, '', '', '', '', '', '',new Bruger('', '', '', '', '', '', '', '', '', ''));

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

                //this.bruger = annonce['user'];
                this.annonce = annonce;
                this.annonce.email = this.annonce.user.email;


                //this.annonce = JSON.parse(annonce);
                //let resource = res[0];
                //console.log(resource['firstName']);




/*                this.bruger = JSON.parse(JSON.stringify(annonce, (key, value) => {
                  if (key == 'user') {
                    return value;
                  }
                  return undefined;
                }));

                console.log('bruuuuuger ' + this.bruger.firstName);
                this.annonce = JSON.parse(annonce, ((key, value) => {
                  if (key === 'user') {
                    return undefined;
                  }
                  return value;
                }));*/
               // this.annonce = annonce;
              }
            );
        }
      );
  }




}
