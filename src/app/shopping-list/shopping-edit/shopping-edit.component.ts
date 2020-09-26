import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediants } from 'src/app/shared/ingrediants.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName:ElementRef;
  @ViewChild('inputAmount') inputAmount:ElementRef;


  constructor(private slSevice: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const newIngdient = new Ingrediants(name, amount);
    this.slSevice.onIngredientAdded(newIngdient);
  }

}
