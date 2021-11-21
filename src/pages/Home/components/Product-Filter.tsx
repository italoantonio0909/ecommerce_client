const ProductFilter = () => {
  return (
    <div className="dis-none panel-filter w-full p-t-10">
      <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
        <div className="filter-col1 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Ordenar por</div>

          <ul>
            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                Defecto
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                Popularidad
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                Cantidad compras
              </a>
            </li>

            <li className="p-b-6">
              <a
                href="#"
                className="filter-link stext-106 trans-04 filter-link-active"
              >
                Novedad
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                Price: Alto hacia abajo
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                Price: Abajo hacia arriba
              </a>
            </li>
          </ul>
        </div>

        <div className="filter-col2 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Price</div>

          <ul>
            <li className="p-b-6">
              <a
                href="#"
                className="filter-link stext-106 trans-04 filter-link-active"
              >
                Todos
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                $0.00 - $50.00
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                $50.00 - $100.00
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                $100.00 - $150.00
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                $150.00 - $200.00
              </a>
            </li>

            <li className="p-b-6">
              <a href="#" className="filter-link stext-106 trans-04">
                $200.00+
              </a>
            </li>
          </ul>
        </div>

        <div className="filter-col3 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Color</div>

          <ul>
            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#222' }}>
                <i className="zmdi zmdi-circle"></i>
              </span>

              <a href="#" className="filter-link stext-106 trans-04">
                Negro
              </a>
            </li>

            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                <i className="zmdi zmdi-circle"></i>
              </span>

              <a
                href="#"
                className="filter-link stext-106 trans-04 filter-link-active"
              >
                Azul
              </a>
            </li>

            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#b3b3b3' }}>
                <i className="zmdi zmdi-circle"></i>
              </span>

              <a href="#" className="filter-link stext-106 trans-04">
                Gris
              </a>
            </li>

            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                <i className="zmdi zmdi-circle"></i>
              </span>

              <a href="#" className="filter-link stext-106 trans-04">
                Verde
              </a>
            </li>

            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                <i className="zmdi zmdi-circle"></i>
              </span>

              <a href="#" className="filter-link stext-106 trans-04">
                Rojo
              </a>
            </li>

            <li className="p-b-6">
              <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                <i className="zmdi zmdi-circle-o"></i>
              </span>

              <a href="#" className="filter-link stext-106 trans-04">
                Blanco
              </a>
            </li>
          </ul>
        </div>

        <div className="filter-col4 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Etiquetas</div>

          <div className="flex-w p-t-4 m-r--5">
            <a
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Fashion
            </a>

            <a
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Lifestyle
            </a>

            <a
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Denim
            </a>

            <a
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Streetstyle
            </a>

            <a
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Crafts
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
