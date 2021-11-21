const PanelNotifications = () => {
  return (
    <div className="wrap-header-cart js-panel-notifications">
      <div className="s-full js-hide-notifications"></div>

      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Notificaciones</span>

          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-notifications">
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelNotifications
