import ProductList from '../components/Index/ProductList'
import ProductPagination from '../components/Index/Productpagination'

const Index = (props) => {
  console.log(props)
  return (
    <>
      <ProductList />
      <ProductPagination />
    </>
  )
}

export default Index
