import Pagination from '../../components/pagination/Pagination'
import Product from '../Home/components/Product'
import ProductFilter from '../Home/components/Product-Filter'
import ProductOverView from '../Home/components/Product-Over-View'
import ProductSearch from '../Home/components/Product-Search'

const Shop = () => {
  const products = [
    {
      id: 1,
      title: 'Chaqueta de caballero',
      price: 25.6,
      tag: 'Nuevo',
      image: '../static/images/product-03.jpg',
    },
    {
      id: 2,
      title: 'Camiseta deportiva',
      price: 25.6,
      tag: 'Nuevo',
      image: '../static/images/product-03.jpg',
    },
    {
      id: 3,
      title: 'Camisa polo',
      price: 25.6,
      tag: 'Nuevo',
      image: '../static/images/product-03.jpg',
    },
    {
      id: 4,
      title: 'Chaqueta polo',
      price: 25.6,
      tag: 'Nuevo',
      image: '../static/images/product-03.jpg',
    },
  ]

  return (
    <div>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <ProductOverView />
          <ProductSearch />
          <ProductFilter />
          <div className="row isotope-grid">
            {products &&
              products.map((element) => (
                <Product
                  image={element.image}
                  price={element.price}
                  tag={element.tag}
                  title={element.title}
                  key={element.id}
                />
              ))}
          </div>
          <Pagination />
        </div>
      </section>
    </div>
  )
}

export default Shop
