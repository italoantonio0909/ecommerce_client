interface Props {
  total: number
  price: number
  image: string
  title: string
}

const CartItemTable = function ({ total, price, image, title }: Props) {
  return (
    <tr className="table_row">
      <td className="column-1">
        <div className="how-itemcart1">
          <img src={image} alt="IMG" />
        </div>
      </td>
      <td className="column-2">{title}</td>
      <td className="column-3">{price}</td>
      <td className="column-4">
        <div className="wrap-num-product flex-w m-l-auto m-r-0">
          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-minus"></i>
          </div>

          <input
            className="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product1"
          />

          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>
      <td className="column-5">{total}</td>
    </tr>
  )
}

export default CartItemTable
