import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  displayRecipe = false;
  recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.displayRecipe = true;
      this.recipe = recipe;
    });
  }

  // selectedRecipe(recipe) {
  //   this.displayRecipe = true;
  //   console.log(recipe);
  //   this.recipe = recipe;
  //   console.log("selected recipe");
  // }
}
