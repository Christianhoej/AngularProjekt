import {Component, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {AnnonceService} from '../annonce.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detaljeret-annonce',
  templateUrl: './detaljeret-annonce.component.html',
  styleUrls: ['./detaljeret-annonce.component.css']
})
export class DetaljeretAnnonceComponent implements OnInit {
  annonce: Annonce;
  id: number;


  constructor(private annonceService: AnnonceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.annonce = this.annonceService.getAnnonce(this.id);
        }
      );
   // this.annonceArr = this.annonceService.getAnnoncer();
   // this.subscription = this.annonceService.annonceændret.subscribe((annoncer: Annonce[]) => {this.annonceArr = annoncer; });
  }

}
