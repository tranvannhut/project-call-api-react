import React from 'react'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductActionPage from './pages/ProductActionPage'
import GetProductList from './containers/GetProductList'


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <GetProductList />
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => <ProductActionPage match={match} history={history} />

  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
]

export default routes