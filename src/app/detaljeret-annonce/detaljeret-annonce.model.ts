export class DetaljeretAnnonceModel {
  public titel: string;
  public pris: number;
  public imagepath: string;
  public beskrivelse: string;
  // public sælger: bruger;

  constructor(titel: string, pris: number, imagepath: string, beskrivelse: string) {
    this.titel = titel;
    this.pris = pris;
    this.imagepath = imagepath;
    this.beskrivelse = beskrivelse;
  }

}
