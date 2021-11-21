import Breadcrumb from '../../components/shared/Breadcrumb'
import Image from '../../static/images/blog-04.jpg'
import PostAddComment from './Post-Add-Comment'

const PostDetail = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumb post="Publicación seleccionada" />
      </div>
      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                <div className="hov-img0 wrap-pic-w how-pos5-parent">
                  <img loading="lazy" src={Image} alt="IMG-BLOG" />

                  <div className="flex-col-c-m size-123 bg9 how-pos5">
                    <span className="ltext-107 cl2 txt-center">07</span>

                    <span className="stext-109 cl3 txt-center">
                      {`$07 2021`}
                    </span>
                  </div>
                </div>
                <div className="p-t-32">
                  <span className="flex-w flex-m stext-111 cl2 p-b-19">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      Tendencias
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      2020/10/07
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>{`12 Comentarios`}</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">
                    Tendencias verano 2021
                  </h4>

                  <p className="stext-117 cl6 p-b-26">
                    Todo contenido publicación
                  </p>
                </div>
                <PostAddComment />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostDetail
