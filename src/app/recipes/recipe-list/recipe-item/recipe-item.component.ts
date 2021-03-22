import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}