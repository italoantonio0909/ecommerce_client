import React from 'react'
import Slider1 from '../../static/images/slide-01.jpg'
import Slider2 from '../../static/images/slide-02.jpg'
import Slider3 from '../../static/images/slide-03.jpg'
import SliderDetail from './Slider-Detail'
import Slider, { CustomArrowProps, Settings } from 'react-slick'
// import $ from 'jquery'

const SliderPreview = function () {
  const sliders = [
    {
      image: Slider1,
      title: 'Nueva collección 2021',
      description: 'Nueva collección',
      id: 1,
    },
    {
      image: Slider2,
      title: 'Nueva collección hombre 2021',
      description: 'Nueva collección',
      id: 2,
    },
    {
      image: Slider3,
      title: 'Nueva colección chaquetas',
      description: 'Casual',
      id: 3,
    },
  ]

  const PrevArrow: React.FC<CustomArrowProps> = function ({ onClick }) {
    return (
      <button onClick={onClick} className="arrow-slick1 prev-slick1">
        <i className="zmdi zmdi-caret-left"></i>
      </button>
    )
  }

  const NextArrow: React.FC<CustomArrowProps> = function ({ onClick }) {
    return (
      <button onClick={onClick} className="arrow-slick1 next-slick1">
        <i className="zmdi zmdi-caret-right"></i>
      </button>
    )
  }

  const settings: Settings = {
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    fade: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: true,
    initialSlide: 1,
    dotsClass: 'slick1-dots',
  }

  return (
    <React.Fragment>
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <Slider {...settings}>
              {sliders &&
                sliders.map((e) => (
                  <SliderDetail
                    index={e.id}
                    key={e.id}
                    image={e.image}
                    title={e.title}
                    description={e.description}
                  />
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SliderPreview
