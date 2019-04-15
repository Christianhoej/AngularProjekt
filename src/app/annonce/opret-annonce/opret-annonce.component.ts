import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AnnonceService} from '../annonce.service';
import {Annonce} from '../annonce.model';

@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  // id: number;
  // editMode = false;
  // annonceForm: FormGroup;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    /*if (this.editMode) {
      this.annonceService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();*/
    const value = form.value;
    const nyAnnonce = new Annonce(value.titel, value.pris, value.imagePath, value.beskrivelse);
    this.annonceService.addAnnonce(nyAnnonce);
  }
}
