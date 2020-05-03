import { connect } from 'react-redux'
import ProductListPage from '../pages/ProductListPage';
const mapStateToProps = (state) => ({
  products: state.showProductList
})
export default connect(mapStateToProps, null)(ProductListPage);