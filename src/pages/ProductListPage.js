import React, { Component } from "react";
import ProductItem from "../components/productItem/ProductItem";
import ProductList from "../components/productList/ProductList";
import apiCaller from './../utils/apiCaller'
import { Link } from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    apiCaller("GET", 'products', null).then(res => {
      this.setState({ products: res.data })
    })
  }
  onDelete = (id) => {
    var { products } = this.state
    apiCaller("DELETE", `products/${id}`, null).then(res => {

      let index = this.findIndex(products, id);
      products.splice(index, 1)
      this.setState({ products: products })
    })
  }
  findIndex(products, id) {
    let result = -1;
    products.forEach((pro, index) => {
      if (pro.id === id) {
        result = index
      }
    })
    return result;
  }
  render() {
    var { products } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/product/add" className="btn btn-info mb-3">Add Product</Link>
            <ProductList>{this.showProductItem(products)}</ProductList>
          </div>
        </div>
      </div>
    )
  }
  showProductItem(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem
          key={index}
          product={product}
          index={index}
          onDelete={this.onDelete}
        />
      })
    }
    return result;
  }
}
export default ProductListPage; 
