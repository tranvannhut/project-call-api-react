import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class ProductItem extends Component {
  onDeleteItem = (id) => {
    if (confirm("Are you want delete item?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var { product, index } = this.props;
    var status = product.status ? "Con hang" : "Het hang";
    var statusClass = product.status ? "primary" : "warning"
    return (
      <React.Fragment>
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><span className={`badge badge-pill badge-${statusClass}`}>{status}</span></td>
          <td>
            <Link className="btn btn-success mr-3" to={`/product/${product.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={() => this.onDeleteItem(product.id)}>Delete</button>
          </td>
        </tr>
      </React.Fragment >
    )
  }
}
export default ProductItem;