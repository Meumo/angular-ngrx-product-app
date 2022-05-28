import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsType {
  /* Get All Products*/
  GET_ALL_PRODUCTS = "[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get All Products Error",

  /* Get Selected Products*/
  GET_SELECTED_PRODUCTS = "[Products] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR = "[Products] Get Selected Products Error",

  /* Search Products*/
  SEARCH_PRODUCTS = "[Products] Search Products",
  SEARCH_PRODUCTS_SUCCESS = "[Products] Search Products Success",
  SEARCH_PRODUCTS_ERROR = "[Products] Search Products Error",

  /* Select Product*/
  SELECT_PRODUCT = "[Product] Select Product",
  SELECT_PRODUCT_SUCCESS = "[Product] Select Product Success",
  SELECT_PRODUCT_ERROR = "[Product] Select Product Error",

  /* Delete Product */
  DELETE_PRODUCT = "[Product] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[Product] Delete Product Success",
  DELETE_PRODUCT_ERROR = "[Product] Delete Product Error",

  /* New Product */
  NEW_PRODUCT = "[Product] New Product",
  NEW_PRODUCT_SUCCESS = "[Product] New Product Success",
  NEW_PRODUCT_ERROR = "[Product] New Product Error",

  /* Save Product */
  SAVE_PRODUCT = "[Product] Save Product",
  SAVE_PRODUCT_SUCCESS = "[Product] Save Product Success",
  SAVE_PRODUCT_ERROR = "[Product] Save Product Error",

  /* Edit Product */
  EDIT_PRODUCT = "[Product] Edit Product",
  EDIT_PRODUCT_SUCCESS = "[Product] Edit Product Success",
  EDIT_PRODUCT_ERROR = "[Product] Edit Product Error",

  /* Update Product */
  UPDATE_PRODUCT = "[Product] Update Product",
  UPDATE_PRODUCT_SUCCESS = "[Product] Update Product Success",
  UPDATE_PRODUCT_ERROR = "[Product] Update Product Error",
}


/* Get All Products*/
export class GetAllProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

/* Get Selected Products*/
export class GetSelectedProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

/* Search Products*/
export class SearchProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS;

  constructor(public payload: string) {
  }
}

export class SearchProductsActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class SearchProductsActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

/* Select Product*/
export class SelectProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

/* Delete Product */
export class DeleteProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.DELETE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class DeleteProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class DeleteProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.DELETE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

/* New Product */
export class NewProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT;

  constructor(public payload: any) {
  }
}

export class NewProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT_SUCCESS;

  constructor(public payload: any) {
  }
}

export class NewProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

/* Save Product */
export class SaveProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

/* Edit Product */
export class EditProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT;

  constructor(public payload: number) {
  }
}

export class EditProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class EditProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

/* Update Product */
export class UpdateProductAction implements Action {
  type: ProductsActionsType = ProductsActionsType.UPDATE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class UpdateProductActionSuccess implements Action {
  type: ProductsActionsType = ProductsActionsType.UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class UpdateProductActionError implements Action {
  type: ProductsActionsType = ProductsActionsType.UPDATE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}
export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
  | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
  | DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
  | NewProductAction | NewProductActionSuccess | NewProductActionError
  | SaveProductAction | SaveProductActionSuccess | SaveProductActionError
  | EditProductAction | EditProductActionSuccess | EditProductActionError
  | UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError
  ;
