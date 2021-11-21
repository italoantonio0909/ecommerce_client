import ProductFavoriteDetail from './Panel-Product-Favorites-Detail'
import { NavLink } from 'react-router-dom'
const PanelProductFavorite = () => {
  const productFavorites = [
    { id: 1, title: 'Camiseta deportiva', image: 'routeIMage' },
    { id: 2, title: 'Camiseta polo', image: 'routeIMage' },
  ]

  return (
    <div className="wrap-header-cart js-panel-product-favorite">
      <div className="s-full js-hide-product-favorite"></div>

      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Productos favoritos</span>
          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-product-favorite">
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {productFavorites &&
              productFavorites.map((e) => (
                <ProductFavoriteDetail
                  title={e.title}
                  key={e.id}
                  image={e.image}
                />
              ))}
          </ul>
          <div className="w-full">
            <div className="header-cart-buttons flex-w w-full">
              <a
                href="shoping-cart.html"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
              >
                Listar
              </a>
              <NavLink
                to="/comprar"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              >
                Comprar
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelProductFavorite
