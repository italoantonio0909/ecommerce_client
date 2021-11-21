import React from 'react'
import Slider1 from '../../static/images/slide-01.jpg'
import Slider2 from '../../static/images/slide-02.jpg'
import Slider3 from '../../static/images/slide-03.jpg'
import SliderDetail from './Slider-Detail'
import Slider, { Settings } from 'react-slick'

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

  // useEffect(() => {
  // $('.wrap-slick1').each(function () {
  //   const wrapSlick1 = $(this)
  //   const slick1 = $(this).find('.slick1')
  //   const itemSlick1 = $(slick1).find('.item-slick1')
  //   const layerSlick1 = $(slick1).find('.layer-slick1')
  //   let actionSlick1 = []
  //   $(slick1).on('init', function () {
  //     var layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1')
  //     for (var i = 0; i < actionSlick1.length; i++) {
  //       clearTimeout(actionSlick1[i])
  //     }
  //     $(layerSlick1).each(function () {
  //       $(this).removeClass($(this).data('appear') + ' visible-true')
  //     })
  //     for (let i = 0; i < layerCurrentItem.length; i++) {
  //       actionSlick1[i] = setTimeout(
  //         function (index) {
  //           $(layerCurrentItem[index]).addClass(
  //             $(layerCurrentItem[index]).data('appear') + ' visible-true'
  //           )
  //         },
  //         $(layerCurrentItem[i]).data('delay'),
  //         i
  //       )
  //     }
  //   })
  //   var showDot = false
  //   if ($(wrapSlick1).find('.wrap-slick1-dots').length > 0) {
  //     showDot = true
  //   }
  //   slick1.slick({
  //     pauseOnFocus: false,
  //     pauseOnHover: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     fade: true,
  //     speed: 1000,
  //     infinite: true,
  //     autoplay: true,
  //     autoplaySpeed: 6000,
  //     arrows: true,
  //     appendArrows: $(wrapSlick1),
  //     prevArrow:
  //       '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
  //     nextArrow:
  //       '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
  //     dots: showDot,
  //     appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
  //     dotsClass: 'slick1-dots',
  //     customPaging: function (slick, index) {
  //       var linkThumb = $(slick.$slides[index]).data('thumb')
  //       var caption = $(slick.$slides[index]).data('caption')
  //       return (
  //         '<img src="' +
  //         linkThumb +
  //         '">' +
  //         '<span class="caption-dots-slick1">' +
  //         caption +
  //         '</span>'
  //       )
  //     },
  //   })
  //   $(slick1).on('afterChange', function (event, slick, currentSlide) {
  //     var layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1')
  //     for (var i = 0; i < actionSlick1.length; i++) {
  //       clearTimeout(actionSlick1[i])
  //     }
  //     $(layerSlick1).each(function () {
  //       $(this).removeClass($(this).data('appear') + ' visible-true')
  //     })
  //     for (var i = 0; i < layerCurrentItem.length; i++) {
  //       actionSlick1[i] = setTimeout(
  //         function (index) {
  //           $(layerCurrentItem[index]).addClass(
  //             $(layerCurrentItem[index]).data('appear') + ' visible-true'
  //           )
  //         },
  //         $(layerCurrentItem[i]).data('delay'),
  //         i
  //       )
  //     }
  //   })
  // })
  // }, [])

  const settings: Settings = {
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <React.Fragment>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            {sliders &&
              sliders.map((e) => (
                <SliderDetail
                  key={e.id}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                />
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SliderPreview
