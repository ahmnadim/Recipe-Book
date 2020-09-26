import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Mash Potteto', 'Irelands most populer food', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg'),
     new Recipe('Test Recipe', 'Testy Recipe is good for test', 'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg')
  ];

  constructor() { }

  getRecipe(){
    return this.recipes.slice();
  }

  singleRecipe(id: number){
    return this.recipes[id];
  }
}
