import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../static/images/icons/logo-01.png'
import {
  ButtonCart,
  ButtonNotify,
  ButtonProductFavorite,
  ButtonSearch,
} from '../button-icon'

const Header = function () {
  useEffect(() => {
    const topBar = document.querySelectorAll('.top-bar')
    const headerDesktop = document.querySelector('.container-menu-desktop')
    const wrapMenu: HTMLElement | null =
      document.querySelector('.wrap-menu-desktop')

    // TopBar querySelectorAll return array elements
    // TopBar has elements
    let posWrapHeader: number = 0
    if (topBar.length > 0) {
      // ClientHeight obtain height element
      posWrapHeader = topBar[0].clientHeight
    } else {
      posWrapHeader = 0
    }

    // ScrollY obtain scroll current window
    if (window.scrollY > posWrapHeader) {
      headerDesktop!.classList.add('fix-menu-desktop')
      wrapMenu!.style.top = '0px'
    } else {
      headerDesktop!.classList.remove('fix-menu-desktop')
      var wrapHeader = posWrapHeader - window.scrollY
      wrapMenu!.style.top = `${wrapHeader}px`
    }

    function scrollWindow() {
      // ScrollY obtain scroll current window
      if (window.scrollY > posWrapHeader) {
        headerDesktop!.classList.add('fix-menu-desktop')
        wrapMenu!.style.top = '0px'
      } else {
        headerDesktop!.classList.remove('fix-menu-desktop')
        var wrapHeader = posWrapHeader - window.scrollY
        wrapMenu!.style.top = `${wrapHeader}px`
      }
    }

    window.addEventListener('scroll', scrollWindow)

    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  return (
    <nav className="limiter-menu-desktop container">
      <button>
        <NavLink to="/" className="logo">
          <img src={logo} alt="IMG-LOGO" />
        </NavLink>
      </button>

      <div className="menu-desktop">
        <ul className="main-menu">
          <li>
            <NavLink to="/">Inicio</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to="/">Primer menú</NavLink>
              </li>
              <li>
                <NavLink to="/">Primer menú</NavLink>
              </li>
              <li>
                <a href="">Primer menú</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/comprar">Comprar</NavLink>
          </li>

          <li className="label1" data-label1="Revisar">
            <NavLink to="/carrito">Carrito</NavLink>
          </li>

          <li>
            <NavLink to="/publicaciones">Publicaciones</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Sobre nosotros</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contáctanos</NavLink>
          </li>
        </ul>
      </div>

      <div className="wrap-icon-header flex-w flex-r-m">
        <ButtonSearch version="web" />
        <ButtonCart version="web" />
        <ButtonProductFavorite version="web" />
        <ButtonNotify />
      </div>
    </nav>
  )
}

export default Header
