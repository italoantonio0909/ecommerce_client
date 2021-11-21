import { useEffect } from 'react'

const BackTop = () => {
  useEffect(() => {
    const backTop = document.getElementById('back-top')
    function scrollBackTop() {
      // Obtain heigth total
      const windowH = window.innerHeight / 2
      // Add event to scroll
      // window exceeds half the dimensions
      if (window.scrollY > windowH) {
        backTop!.style.display = 'flex'
      } else {
        backTop!.style.display = 'none'
      }
    }

    function scrollBackTopAction() {
      window.scrollTo(0, 0)
    }

    window.addEventListener('scroll', scrollBackTop)
    backTop!.addEventListener('click', scrollBackTopAction)

    return () => {
      window.removeEventListener('scroll', scrollBackTop)
      window.removeEventListener('click', scrollBackTopAction)
    }
  }, [])

  return (
    <div className="btn-back-to-top" id="back-top">
      <span className="symbol-btn-back-to-top">
        <i className="zmdi zmdi-chevron-up"></i>
      </span>
    </div>
  )
}

export default BackTop
