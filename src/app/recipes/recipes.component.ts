import { RecipeService } from './recipe.service';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, AfterViewInit {
  selectedRecipe: Recipe;
  newEvent: any;

  constructor(
    private cd: ChangeDetectorRef,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.selectedRecipe = this.newEvent;
    this.cd.detectChanges();
  }

  onSelectedRecipe(event) {
    this.newEvent = event;
  }
}
