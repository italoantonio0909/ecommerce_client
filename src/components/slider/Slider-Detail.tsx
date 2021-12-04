import { NavLink } from 'react-router-dom'

interface Props {
  index: number
  image: string
  title: string
  description: string
}

const SliderDetail = function ({ image, title, description, index }: Props) {
  return (
    <div className="item-slick1" style={{ backgroundImage: `url(${image})` }}>
      <div className="container h-full">
        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
          <div
            className="layer-slick1 animate__animated visible-false"
            data-delay="800"
            data-appear="animate__fadeInDown"
          >
            <span className="ltext-101 cl2 respon2">{title}</span>
          </div>

          <div
            className="layer-slick1 animate__animated visible-false"
            data-delay="800"
            data-appear="animate__fadeInUp"
          >
            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
              {description}
            </h2>
          </div>

          <div
            className="layer-slick1 animate__animated visible-false"
            data-delay="1600"
            data-appear="animate__fadeInUp"
          >
            <NavLink
              to="/comprar"
              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Comprar
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderDetail
