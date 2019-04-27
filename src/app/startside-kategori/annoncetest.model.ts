export class AnnoncetestModel {
  public titel: string;
  public pris: number;
  public imagepath: string;
  public beskrivelse: string;
  public kategori: string;
  public materiale: string;
  // public sælger: bruger;

  constructor(titel: string, pris: number, imagepath: string, beskrivelse: string, kategori: string, materiale: string) {
    this.titel = titel;
    this.pris = pris;
    this.imagepath = imagepath;
    this.beskrivelse = beskrivelse;
    this.kategori = kategori;
    this.materiale = materiale;
  }
}
