import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  in;
  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
