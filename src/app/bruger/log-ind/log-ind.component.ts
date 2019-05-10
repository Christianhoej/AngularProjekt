import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BrugerService} from '../services/bruger.service';
import {Bruger} from '../Models/bruger.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-ind',
  templateUrl: './log-ind.component.html',
  styleUrls: ['./log-ind.component.css']
})
export class LogIndComponent implements OnInit {
  // @Output() erLoggetIndEvent = new EventEmitter<boolean>()
  constructor(private brugerService: BrugerService, private router: Router) { }
  ngOnInit() {
  }

  onLogIndPressed(form: NgForm) {
    const value = form.value;
    let connnn = '';
    connnn = value.email;
   // console.log(connnn + ' Det sker? ' + value.password);
    // TODO her skal der laves kald til login og response skal "logges til test af om det virker.

    this.brugerService.logind(form.value.email, form.value.password)
      .subscribe(
        (bruger: Bruger) => {this.brugerService.bruger = bruger;
                                  console.log(this.brugerService.bruger.email);
                                  if(this.brugerService.bruger!=null){
                                    this.brugerService.loggetInd.next(true);
                                  }
                                  this.router.navigate(['/startside']);
                                  },
        (error) => console.log(error)
      );
    /*if(this.brugerService.bruger!=null){
      this.brugerService.loggetInd = true;
      // this.erLoggetIndEvent.emit(true);
    }*/
  }

}
