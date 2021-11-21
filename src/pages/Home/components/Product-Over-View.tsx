import { useEffect } from 'react'
import $ from 'jquery'

const ProductOverView = () => {
  useEffect(() => {
    $('.js-show-filter').on('click', function () {
      $(this).toggleClass('show-filter')
      $('.panel-filter').slideToggle(400)

      if ($('.js-show-search').hasClass('show-search')) {
        $('.js-show-search').removeClass('show-search')
        $('.panel-search').slideUp(400)
      }
    })

    $('.js-show-search').on('click', function () {
      $(this).toggleClass('show-search')
      $('.panel-search').slideToggle(400)

      if ($('.js-show-filter').hasClass('show-filter')) {
        $('.js-show-filter').removeClass('show-filter')
        $('.panel-filter').slideUp(400)
      }
    })
  }, [])
  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
          data-filter="*"
        >
          Todos los productos
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".women"
        >
          Mujer
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".men"
        >
          Hombre
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".bag"
        >
          Maletas
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".shoes"
        >
          Zapatos
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".watches"
        >
          Relojes
        </button>
      </div>

      <div className="flex-w flex-c-m m-tb-10">
        <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
          <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
          <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
          Filtrar
        </div>

        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
          <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
          Buscar
        </div>
      </div>
    </div>
  )
}

export default ProductOverView
