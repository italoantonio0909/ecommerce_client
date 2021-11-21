import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, HeaderInfo } from './components/layout'
import {
  PanelCart,
  PanelSearch,
  PanelNotifications,
  PanelProductFavorite,
} from './components/panel'
import { BackTop } from './components/shared'
import { Footer } from './pages/Footer'
import { Home } from './pages/Home/components'
import { Post } from './pages/post'
import { Shop } from './pages/shop'
import store from './state/store'
import PostDetail from './pages/post-detail/Post-Detail'
import { Cart } from './pages/cart'

const App = function () {
  return (
    <Provider store={store}>
      <Router>
        <div className="animsition">
          <div className="header-v4">
            <div className="container-menu-desktop">
              <HeaderInfo />
              <div className="wrap-menu-desktop">
                <Header />
              </div>
            </div>
            <PanelSearch />
          </div>
          <Switch>
            <Route
              path="/publicaciones/detalle/:postId"
              component={PostDetail}
            />
            <Route path="/carrito" component={Cart} />
            <Route path="/publicaciones" component={Post} />
            <Route path="/comprar" component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
          <PanelProductFavorite />
          <PanelNotifications />
          <PanelCart />
          <BackTop />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
