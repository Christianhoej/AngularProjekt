import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrugerService} from '../bruger/services/bruger.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{
  subscription: Subscription;
  erLoggetInd: boolean = false;
  constructor(private brugerService: BrugerService) {
    this.subscription = this.brugerService.loggetInd.subscribe(
      (logind: boolean) => {
        if (logind){
          this.erLoggetInd = true;
        }
        else {
          this.erLoggetInd = false;
        }
      }
    );
  }

  getErLoggetInd($event){
    this.erLoggetInd = $event;
  }


  inboundClick = true;
  outboundClick = true;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
