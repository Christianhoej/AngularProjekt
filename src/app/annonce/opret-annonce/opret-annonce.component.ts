import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AnnonceService} from '../annonce.service';

@Component({
  selector: 'app-opret-annonce',
  templateUrl: './opret-annonce.component.html',
  styleUrls: ['./opret-annonce.component.css']
})
export class OpretAnnonceComponent implements OnInit {
  // id: number;
  // editMode = false;
  annonceForm: FormGroup;

  constructor(/*public annonceService: AnnonceService*/) { }

  ngOnInit() {
  }

  onSubmit() {
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
    // this.annonceService.addAnnonce(this.annonceForm.value);
  }
}
