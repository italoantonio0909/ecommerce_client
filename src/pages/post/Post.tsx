import background from '../../static/images/bg-02.jpg'
import { TitlePage } from '../../components/shared'
import Pagination from '../../components/pagination/Pagination'
import PostDetailPreview from './Post-Detail-Preview'

const Post = () => {
  const posts = [
    {
      id: 1,
      image: 'image',
      publish: '1 octubre 2021',
      title: 'Verano 2021',
      description: 'Description post',
      category: 'Tendencias',
    },
    {
      id: 2,
      image: 'image',
      publish: '1 octubre 2021',
      title: 'Verano 2021',
      description: 'Description post',
      category: 'Tendencias',
    },
  ]
  return (
    <>
      <TitlePage image={background} title="Publicaciones" />
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {posts &&
                  posts.map((element) => (
                    <PostDetailPreview
                      id={element.id}
                      numberComments={12}
                      key={element.id}
                      publishDay="07"
                      publishMonth="10"
                      publishYear="2021"
                      title={'Moda y tendencias'}
                      publish={'2021/10/07'}
                      image={element.image}
                      category="Tendencias"
                      description="Tendencias año 2021, este verano."
                    />
                  ))}
              </div>
            </div>
            <Pagination />
            {/* <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <FormSearch />
                <div className="p-t-55">
                  <SectionCategories />
                </div>
                <div className="p-t-65">
                  <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
                  <ul>
                    <li className="flex-w flex-t p-b-30">
                      <a
                        href="#"
                        className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                      >
                        <img src={image} alt="PRODUCT" />
                      </a>

                      <div className="size-215 flex-col-t p-t-8">
                        <a href="#" class="stext-116 cl8 hov-cl1 trans-04">
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="stext-116 cl6 p-t-20">$19.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-t-50">
                  <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
                  <div className="flex-w m-r--5">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Post
