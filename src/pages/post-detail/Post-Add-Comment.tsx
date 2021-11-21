const PostAddComment = function () {
  return (
    <div className="p-t-40">
      <h5 className="mtext-113 cl2 p-b-12">Comentar</h5>
      <p className="stext-107 cl6 p-b-40">
        Tu email no será publicado pero si es necesario para enviar comentario.
      </p>
      <form>
        <div className="bor19 m-b-20">
          <textarea
            className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
            placeholder="Escribe comentario"
          ></textarea>
        </div>

        <div className="bor19 m-b-30 size-219">
          <input
            className="stext-111 cl2 plh3 size-116 p-lr-18"
            placeholder="Dirección electrónica"
          />
        </div>
        <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 trans-04 p-lr-15">
          Agregar comentario
        </button>
      </form>
    </div>
  )
}

export default PostAddComment
