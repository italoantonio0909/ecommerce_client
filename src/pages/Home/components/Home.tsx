import React from 'react'
// import { Banner } from '../../../components/banner'
// import ProductFilter from './Product-Filter'
// import ProductOverView from './Product-Over-View'
// import ProductSearch from './Product-Search'
// import Product from './Product'
// import Pagination from '../../../components/pagination/Pagination'
// import PostSection from '../../../components/blog/Post-Section'
import SliderPreview from '../../../components/slider/SliderPreview'

const Home = function () {
  // const products = [
  //   {
  //     id: 1,
  //     title: 'Chaqueta de caballero',
  //     price: 25.6,
  //     tag: 'Nuevo',
  //     image: '../static/images/product-03.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Camiseta deportiva',
  //     price: 25.6,
  //     tag: 'Nuevo',
  //     image: '../static/images/product-03.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Camisa polo',
  //     price: 25.6,
  //     tag: 'Nuevo',
  //     image: '../static/images/product-03.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Chaqueta polo',
  //     price: 25.6,
  //     tag: 'Nuevo',
  //     image: '../static/images/product-03.jpg',
  //   },
  // ]

  return (
    <React.Fragment>
      <SliderPreview />
      {/* <Banner />
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Productos</h3>
          </div>
          <ProductOverView />
          <ProductSearch />
          <ProductFilter />

          <div className="row isotope-grid">
            {products &&
              products.map((element) => (
                <Product
                  key={element.id}
                  tag={element.tag}
                  title={element.title}
                  image={element.image}
                  price={element.price}
                />
              ))}
          </div>
          <Pagination />
        </div>
      </section>
      <PostSection /> */}
    </React.Fragment>
  )
}

export default Home
