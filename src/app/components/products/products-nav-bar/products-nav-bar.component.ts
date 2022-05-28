import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetSelectedProductsAction,
  ProductsActionsType,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  state:ProductsState | null=null;
  readonly ProductsActionsType=ProductsActionsType;

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.catalogueState;
    });
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword))
  }

  onNewProducts() {
    this.router.navigateByUrl("/newProduct");
  }
}
