import BannerDetail from './Banner-Detail'

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: 'Mujer',
      img: '../../static/images/banner-01.jpg',
      description: 'Verano 2021',
    },
    { id: 2, title: 'Hombre', img: 'Banner2', description: 'Verano 2021' },
    {
      id: 3,
      title: 'Accesorios',
      img: 'Banner3',
      description: 'Nuevas tendencias',
    },
  ]

  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          {banners.map((element) => (
            <BannerDetail
              key={element.id}
              image={element.img}
              description={element.description}
              title={element.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
