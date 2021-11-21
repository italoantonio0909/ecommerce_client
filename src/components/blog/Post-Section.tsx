import PostDetail from './Post-Detail'

const PostSection = () => {
  const posts = [
    {
      id: 1,
      image: 'image',
      publish: '1 octubre 2021',
      title: 'Verano 2021',
      description: 'Description post',
      category: 'Tendencias',
    },
  ]

  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Publicaciones</h3>
        </div>

        <div className="row">
          {posts &&
            posts.map((element) => (
              <PostDetail
                key={element.id}
                id={element.id}
                image={element.image}
                publish={element.publish}
                title={element.title}
                description={element.description}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default PostSection
