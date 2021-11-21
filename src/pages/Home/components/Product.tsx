import IconHeart1 from '../../../static/images/icons/icon-heart-01.png'
import IconHeart2 from '../../../static/images/icons/icon-heart-02.png'
import product3 from '../../../static/images/product-03.jpg'

import { useEffect } from 'react'

interface Props {
  title: string
  price: number
  tag: string
  image: string
}

const Product = ({ title, price, tag, image }: Props) => {
  useEffect(() => {
    const showProductModal =
      document.getElementsByClassName('show-product-modal')
    const hideProductModal = document.querySelectorAll('.js-hide-modal1')
    const modal: HTMLElement | null = document.querySelector('.js-modal1')

    function showModal(e: Event) {
      e.preventDefault()
      modal!.classList.add('show-modal1')
    }
    function hideModal(e: Event) {
      e.preventDefault()
      document.querySelector('.js-modal1')?.classList.remove('show-modal1')
    }

    // Add events to buttons
    showProductModal[0].addEventListener('click', showModal)
    hideProductModal.forEach((element) =>
      element.addEventListener('click', hideModal)
    )

    return () => {
      window.removeEventListener('click', showModal)
      window.removeEventListener('click', hideModal)
    }
  })
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men animate__animated animate__zoomIn">
      <div className="block2">
        <div className="block2-pic hov-img0 label-new" data-label={tag}>
          <img src={product3} alt={title} />
          <a
            href="#"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 show-product-modal"
          >
            Ver detalles
          </a>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <a
              href="product-detail.html"
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {title}
            </a>

            <span className="stext-105 cl3">${price}</span>
          </div>

          <div className="block2-txt-child2 flex-r p-t-3">
            <a className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
              <img
                className="icon-heart1 dis-block trans-04"
                src={IconHeart1}
                alt="ICON"
              />
              <img
                className="icon-heart2 dis-block trans-04 ab-t-l"
                src={IconHeart2}
                alt="ICON"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
