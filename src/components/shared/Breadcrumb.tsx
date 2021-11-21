import { Link } from 'react-router-dom'

interface Props {
  post: string
}

const Breadcrumb = ({ post }: Props) => {
  return (
    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
      <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
        Inicio
        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
      </Link>

      <Link to="/publicaciones" className="stext-109 cl8 hov-cl1 trans-04">
        Publicaciones
        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
      </Link>

      <span className="stext-109 cl4">{post}</span>
    </div>
  )
}

export default Breadcrumb
