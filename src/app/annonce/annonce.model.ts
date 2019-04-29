export class Annonce {
  public titel: string;
  public pris: number;
  public imagepath: string;
  public beskrivelse: string;
  public kategori: string[];
  public materiale: string[];
  private annonceID: string;
  // public sælger: bruger;

  constructor(titel: string, pris: number, imagepath: string, beskrivelse: string, kategori: string[], materiale: string[], annonceID: string) {
    this.titel = titel;
    this.pris = pris;
    this.imagepath = imagepath;
    this.beskrivelse = beskrivelse;
    this.kategori = kategori;
    this.materiale = materiale;
    this.annonceID = annonceID;
  }
}
