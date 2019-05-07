import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrugerService} from '../bruger/services/bruger.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  subscription: Subscription;
  erLoggetInd = false;
  constructor(private brugerService: BrugerService) {
    this.subscription = this.brugerService.loggetInd.subscribe(
      (logind: boolean) => {
        if (logind) {
          this.erLoggetInd = true;
        } else {
          this.erLoggetInd = false;
        }
      }
    );
  }

  logind(){
    if (this.erLoggetInd = true) {
      this.erLoggetInd = false;
      this.brugerService.bruger=null;
    }
  }

  getErLoggetInd($event){
    this.erLoggetInd = $event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
