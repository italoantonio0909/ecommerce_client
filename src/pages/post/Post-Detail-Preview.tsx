import { Link } from 'react-router-dom'
import Image from '../../static/images/blog-04.jpg'

interface Props {
  id: number
  image: string
  publishDay: string
  publishMonth: string
  publishYear: string
  category: string
  publish: string
  description: string
  title: string
  numberComments: number
}
const PostDetailPreview = ({
  id,
  image,
  publishDay,
  publishMonth,
  publishYear,
  category,
  publish,
  description,
  title,
  numberComments,
}: Props) => {
  return (
    <div className="p-b-63">
      <Link
        to={`/publicaciones/detalle/${id}`}
        className="hov-img0 how-pos5-parent"
      >
        <img loading="lazy" src={Image} alt="IMG-BLOG" />
        <div className="flex-col-c-m size-123 bg9 how-pos5">
          <span className="ltext-107 cl2 txt-center">{publishDay}</span>

          <span className="stext-109 cl3 txt-center">
            {`${publishMonth} ${publishYear}`}
          </span>
        </div>
      </Link>

      <div className="p-t-32">
        <h4 className="p-b-15">
          <Link
            to={`/publicaciones/detalle/${id}`}
            className="ltext-108 cl2 hov-cl1 trans-04"
          >
            {title}
          </Link>
        </h4>

        <p className="stext-117 cl6">{description}</p>

        <div className="flex-w flex-sb-m p-t-18">
          <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
            <span>
              <span className="cl4">Por</span> Administrador
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>
            <span>
              {category}
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>
            <span>
              {publish}
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>

            <span>{`${numberComments} Comentarios`}</span>
          </span>

          <Link
            to={`/publicaciones/detalle/${id}`}
            className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
          >
            Continuar leyendo
            <i className="fa fa-long-arrow-right m-l-9"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostDetailPreview
