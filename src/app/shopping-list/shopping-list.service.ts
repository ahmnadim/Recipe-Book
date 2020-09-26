import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingrediants[]>();
  ingediants: Ingrediants[] = [
    new Ingrediants('Poteto', 8),
    new Ingrediants('Tometo', 7)
  ];
  constructor() { }

  getIngredients(){
    return this.ingediants.slice();
  }

  
  onIngredientAdded(ingredient: Ingrediants){
    this.ingediants.push(ingredient);
    this.ingredientChanged.emit(this.ingediants.slice());
  }

}
