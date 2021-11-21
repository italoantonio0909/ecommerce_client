import { useEffect } from 'react'

interface Props {
  version: 'mobile' | 'web'
}

const ButtonCart = ({ version }: Props) => {
  useEffect(() => {
    const showPanelCart = document.querySelector('.js-show-cart')
    const hidePanelCart = document.querySelectorAll('.js-hide-cart')
    const panelCart = document.querySelector('.js-panel-cart')

    function showPanel() {
      panelCart!.classList.add('show-header-cart')
    }

    function hidePanel() {
      panelCart!.classList.remove('show-header-cart')
    }

    // Add events
    showPanelCart!.addEventListener('click', showPanel)
    hidePanelCart.forEach((e) => {
      e.addEventListener('click', hidePanel)
    })
    return () => {
      window.removeEventListener('click', showPanel)
      window.removeEventListener('click', hidePanel)
    }
  }, [])
  return (
    <div
      className={
        version === 'mobile'
          ? 'icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart'
          : 'icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart'
      }
      data-notify="10"
    >
      <i className="zmdi zmdi-shopping-cart"></i>
    </div>
  )
}

export default ButtonCart
