import React from 'react'
import { Link } from 'react-router-dom'
import CartApplyCoupon from './Cart-Apply-Coupon'
import CartTable from './Cart-Table'

const Cart = function () {
  return (
    <React.Fragment>
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
            Inicio
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </Link>

          <span className="stext-109 cl4">Carrito compra</span>
        </div>
      </div>
      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <CartTable />
                </div>
                <CartApplyCoupon />
              </div>
            </div>

            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50"></div>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Cart
