import { useEffect } from 'react'

const ButtonNotify = () => {
  useEffect(() => {
    const showPanelNotification = document.querySelector(
      '.js-show-notifications'
    )
    const hidePanelNotification = document.querySelectorAll(
      '.js-hide-notifications'
    )
    const panelNotification = document.querySelector('.js-panel-notifications')
    function showPanel() {
      panelNotification!.classList.add('show-header-cart')
    }
    function hidePanel() {
      panelNotification!.classList.remove('show-header-cart')
    }
    // Add events
    showPanelNotification!.addEventListener('click', showPanel)
    hidePanelNotification.forEach((e) => {
      e.addEventListener('click', hidePanel)
    })
    return () => {
      window.removeEventListener('click', showPanel)
      window.removeEventListener('click', hidePanel)
    }
  }, [])

  return (
    <div
      className="animate__infinite icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-notifications"
      data-notify="3"
    >
      <i className="zmdi zmdi-notifications icon-notification"></i>
    </div>
  )
}

export default ButtonNotify
