import { useEffect } from 'react'

interface Props {
  version: 'mobile' | 'web'
}

const ButtonProductFavorite = ({ version }: Props) => {
  useEffect(() => {
    var showPanelProductFavorite = document.querySelector(
      '.js-show-product-favorite'
    )
    var hidePanelProductFavorite = document.querySelectorAll(
      '.js-hide-product-favorite'
    )
    var panelProductFavorite = document.querySelector(
      '.js-panel-product-favorite'
    )

    function showPanel() {
      panelProductFavorite!.classList.add('show-header-cart')
    }

    function hidePanel() {
      panelProductFavorite!.classList.remove('show-header-cart')
    }

    // Add events
    showPanelProductFavorite?.addEventListener('click', showPanel)
    hidePanelProductFavorite.forEach((e) => {
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
          ? 'dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti'
          : 'icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-product-favorite'
      }
      data-notify="1"
    >
      <i className="zmdi zmdi-favorite-outline"></i>
    </div>
  )
}

export default ButtonProductFavorite
