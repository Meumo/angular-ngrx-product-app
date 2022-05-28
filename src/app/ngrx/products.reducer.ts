import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsType} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial",
  NEW = "New",
  EDIT = "Edit",
  UPDATED = "Updated"
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null
  currentAction:ProductsActions | null
}

const initState: ProductsState = {
  products: [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction:null
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
  switch (action.type) {
    /* Get All Products*/
    case ProductsActionsType.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* Get Selected Products*/
    case ProductsActionsType.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* Search Products*/
    case ProductsActionsType.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}

    /* Select Product */
    case ProductsActionsType.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SELECT_PRODUCT_SUCCESS:
      let product: Product = (<ProductsActions>action).payload;
      let listProducts: Product[] = [...state.products];
      let data = listProducts.map(p => (p.id == product.id) ? product : p);
      return {...state, dataState: ProductsStateEnum.LOADED, products: data,currentAction:<ProductsActions>action}
    case ProductsActionsType.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}

    /* Delete Product */
    case ProductsActionsType.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.DELETE_PRODUCT_SUCCESS:
      let p: Product = (<ProductsActions>action).payload;
      let index = state.products.indexOf(p);
      let productList: Product[] = [...state.products];
      productList.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products: productList,currentAction:<ProductsActions>action}
    case ProductsActionsType.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* New Product */
    case ProductsActionsType.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW}
    case ProductsActionsType.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* Save Product */
    case ProductsActionsType.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SAVE_PRODUCT_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload)
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods,currentAction:<ProductsActions>action}
    case ProductsActionsType.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* Save Product */
    case ProductsActionsType.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING}
    case ProductsActionsType.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /* Update Product */
    case ProductsActionsType.UPDATE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.UPDATE_PRODUCT_SUCCESS:
      let updatedProduct:Product=(<ProductsActions>action).payload;
      let listProds=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      return {...state, dataState: ProductsStateEnum.UPDATED,products:listProds,currentAction:<ProductsActions>action}
    case ProductsActionsType.UPDATE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    default:
      return {...state}
  }

}
