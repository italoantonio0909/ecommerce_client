import icon_pay_01 from '../../static/images/icons/icon-pay-01.png'
import icon_pay_02 from '../../static/images/icons/icon-pay-02.png'
import icon_pay_03 from '../../static/images/icons/icon-pay-03.png'
import icon_pay_04 from '../../static/images/icons/icon-pay-04.png'
import icon_pay_05 from '../../static/images/icons/icon-pay-05.png'

const Footer = () => {
  return (
    <footer className="bg3 p-t-75 p-b-32">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">CATEGORÍAS</h4>
            <ul>
              {/* {categories &&
                categories.map((element) => (
                  <li className="p-b-10" key={element.id}>
                    <a className="stext-107 cl7 hov-cl1 trans-04">
                      {element.name}
                    </a>
                  </li>
                ))} */}
              <li className="p-b-10">
                <a className="stext-107 cl7 hov-cl1 trans-04">Hombre</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">AYUDA</h4>

            <ul>
              <li className="p-b-10">
                <a className="stext-107 cl7 hov-cl1 trans-04">Órdenes</a>
              </li>

              <li className="p-b-10">
                <a className="stext-107 cl7 hov-cl1 trans-04">Devoluciones</a>
              </li>

              <li className="p-b-10">
                <a className="stext-107 cl7 hov-cl1 trans-04">Facturación</a>
              </li>

              <li className="p-b-10">
                <a className="stext-107 cl7 hov-cl1 trans-04">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">INFORMACIÓN</h4>

            <p className="stext-107 cl7 size-201">
              Alguna duda? Puedes contactarnos a la siguiente dirección
              electrónica store@example.com
            </p>

            <div className="p-t-27">
              <a className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-facebook"></i>
              </a>

              <a className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-instagram"></i>
              </a>

              <a className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">RECIBIR NOTIFICACIONES</h4>
            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input
                  className="input1 bg-none plh1 stext-107 cl7"
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="email@ejemplo.com"
                />
                <div className="focus-input1 trans-04"></div>
              </div>

              <div className="p-t-18 animate__animated">
                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                  Suscribirme
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-t-40">
          <div className="flex-c-m flex-w p-b-18">
            <a className="m-all-1">
              <img src={icon_pay_01} alt="ICON-PAY" />
            </a>
            <a className="m-all-1">
              <img src={icon_pay_02} alt="ICON-PAY" />
            </a>

            <a className="m-all-1">
              <img src={icon_pay_03} alt="ICON-PAY" />
            </a>

            <a className="m-all-1">
              <img src={icon_pay_04} alt="ICON-PAY" />
            </a>

            <a className="m-all-1">
              <img src={icon_pay_05} alt="ICON-PAY" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
