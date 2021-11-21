import { Link } from 'react-router-dom'
import Blog1 from '../../static/images/blog-01.jpg'

interface Props {
  id: number
  image: string
  publish: string
  title: string
  description: string
}

const PostDetail = ({ id, image, publish, title, description }: Props) => {
  return (
    <div className="col-sm-6 col-md-4 p-b-40">
      <div className="blog-item">
        <div className="hov-img0">
          <Link to={`/post-detail/${id}`}>
            <img src={Blog1} alt="IMG-BLOG" />
          </Link>
        </div>

        <div className="p-t-15">
          <div className="stext-107 flex-w p-b-14">
            <span className="m-r-3">
              <span className="cl4">Por</span>
              <span className="cl5"> &nbsp; Administrador</span>
            </span>

            <span>
              <span className="cl4"></span>

              <span className="cl5">|&nbsp;{publish}</span>
            </span>
          </div>

          <h4 className="p-b-12">
            <Link
              to={`/post-detail/${id}`}
              className="mtext-101 cl2 hov-cl1 trans-04"
            >
              {title}
            </Link>
          </h4>

          <p className="stext-108 cl6">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
