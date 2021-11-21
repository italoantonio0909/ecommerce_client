interface Props {
  image: string
  title: string
}
const TitlePage = ({ image, title }: Props) => {
  return (
    <section
      className="bg-img1 txt-center p-lr-15 p-tb-92"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="ltext-105 cl0 txt-center">{title}</h2>
    </section>
  )
}

export default TitlePage
