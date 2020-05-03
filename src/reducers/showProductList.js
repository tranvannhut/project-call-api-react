import * as types from './../constants/ActionTypes'
const initialState = [{
  id: 1,
  name: "I phone 5",
  price: '500$',
  status: true
},
{
  id: 2,
  name: "I phone 6s",
  price: '600$',
  status: false
},
{
  id: 3,
  name: "I phone 7",
  price: '700$',
  status: false
}
]
const showProductList = ((state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ALL_PRODUCT:
      return [...state]
    case types.ADD_PRODUCT:
      return [...state, { state: action.product }]
    default: return state
  }
})
export default showProductList;