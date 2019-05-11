import {Bruger} from '../bruger/bruger.model';

export class Annonce {
  public header: string;
  public price: number;
  public imageURL: string;
  public description: string;
  public category: string;
  public adId: string;
  public email: string;
  public date: string;
  public user: Bruger;

 constructor(header: string, price: number, imageURL: string, description: string,
             category: string, adId: string, email: string, date: string, user: Bruger) {
    this.header = header;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this.category = category;
    this.adId = adId;
    this.email = email;
    this.date = date;
    this.user = user;
  }
}
