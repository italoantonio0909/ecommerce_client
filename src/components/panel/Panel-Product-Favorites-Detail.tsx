import imageP from '../../static/images/item-cart-01.jpg'

interface Props {
  title: string
  image: string
}

const ProductFavoriteDetail = function ({ title, image }: Props) {
  return (
    <li className="header-cart-item flex-w flex-t m-b-12">
      <div className="header-cart-item-img">
        <img src={imageP} alt="IMG" />
      </div>
      <div className="header-cart-item-txt p-t-8">
        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
          {title}
        </a>
      </div>
    </li>
  )
}

export default ProductFavoriteDetail
