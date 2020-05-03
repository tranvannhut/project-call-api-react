import * as types from './../constants/ActionTypes'
export const showProductList = () => {
  type: types.SHOW_ALL_PRODUCT
}
export const addProduct = (product) => {
  type: types.ADD_PRODUCT
  product: product
}