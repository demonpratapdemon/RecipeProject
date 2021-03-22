import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amtInput') amtInputRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onAddIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amt = this.amtInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amt);
    this.shoppingService.addIngredient(ingredient);
  }
}
