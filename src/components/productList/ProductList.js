import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>Stt</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    )
  }
}
export default ProductList;
