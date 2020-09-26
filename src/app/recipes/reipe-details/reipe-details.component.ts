import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reipe-details',
  templateUrl: './reipe-details.component.html',
  styleUrls: ['./reipe-details.component.css']
})
export class ReipeDetailsComponent implements OnInit {
  recipe:Recipe;
  id: number;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.singleRecipe(this.id); 
      }
    );
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
