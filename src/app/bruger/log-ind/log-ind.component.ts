import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-ind',
  templateUrl: './log-ind.component.html',
  styleUrls: ['./log-ind.component.css']
})
export class LogIndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogIndPressed(form: NgForm) {
    const value = form.value;
    let connnn = '';
    connnn = value.email;
    console.log(connnn + ' Det sker? ' + value.password);
    // TODO her skal der laves kald til login og response skal "logges til test af om det virker.



  }

}
