import {NgModule} from '@angular/core';

export class Annonce {
  public header: string;
  public price: number;
  public imageURL: string;
  public description: string;
  public category: string;
  public id: string;
  public email: string;
  public date: string;

  // public sælger: bruger;
  constructor(header: string, price: number, imageURL: string, description: string, category: string, id: string, email: string, date: string) {
    this.header = header;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this.category = category;
    this.id = id;
    this.email = email;
    this.date = date;
  }
}
