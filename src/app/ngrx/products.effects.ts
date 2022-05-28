import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteProductActionError,
  DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess, NewProductActionSuccess,
  ProductsActions,
  ProductsActionsType, SaveProductActionError,
  SearchProductsActionError,
  SearchProductsActionSuccess, SelectProductAction,
  SelectProductActionError,
  SelectProductActionSuccess, UpdateProductAction, UpdateProductActionError, UpdateProductActionSuccess
} from "./products.actions";

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductService, private effectActions: Actions) {
  }

  /* Get All Products */
  getAllProductsEffects: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        return this.productsService.getAllProducts()
          .pipe(
            map((products) => new GetAllProductsActionSuccess(products)),
            catchError((err) => of(new GetAllProductsActionError(err.message)))
          )
      })
    )
  );

  /* Get Selected Products */
  getSelectedProductsEffects: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
      mergeMap((action) => {
        return this.productsService.getSelectedProducts()
          .pipe(
            map((products) => new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err.message)))
          )
      })
    )
  );
  /* Search Products*/
  SearchProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products) => new SearchProductsActionSuccess(products)),
            catchError((err) => of(new SearchProductsActionError(err.message)))
          )
      })
    )
  );
  /* Select products */
  SelectProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.select(action.payload)
          .pipe(
            map((product) => new SelectProductActionSuccess(product)),
            catchError((err) => of(new SelectProductActionError(err.message)))
          )
      })
    )
  );

  /* Delete products */
  DeleteProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.deleteProduct(action.payload)
          .pipe(
            map(() => new DeleteProductActionSuccess(action.payload)),
            catchError((err) => of(new DeleteProductActionError(err.message)))
          )
      })
    )
  );

  /* New products */
  NewProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.NEW_PRODUCT),
      map((action: ProductsActions) => {
        return new NewProductActionSuccess({});
      })
    )
  );

  /* Save products */
  SaveProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.SAVE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.save(action.payload)
          .pipe(
            map((product) => new SelectProductActionSuccess(product)),
            catchError((err) => of(new SaveProductActionError(err.message)))
          )
      })
    )
  );

  /* Edit products */
  EditProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.EDIT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.getProducts(action.payload)
          .pipe(
            map((product) => new EditProductActionSuccess(product)),
            catchError((err) => of(new EditProductActionError(err.message)))
          )
      })
    )
  );

  /* Update products */
  UpdateProductsEffects: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsType.UPDATE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.updateProduct(action.payload)
          .pipe(
            map((product) => new UpdateProductActionSuccess(product)),
            catchError((err) => of(new UpdateProductActionError(err.message)))
          )
      })
    )
  );
}
