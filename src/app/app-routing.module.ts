import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ReipeDetailsComponent } from './recipes/reipe-details/reipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: NewRecipeComponent},
    {path: ':id', component: ReipeDetailsComponent},
    {path: ':id/edit', component: EditRecipeComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
