import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingediants: Ingrediants[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingediants = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      ingediants => {
        this.ingediants = ingediants;
      }
    );
  }

}
