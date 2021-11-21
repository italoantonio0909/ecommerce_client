import { useEffect } from 'react'

interface Props {
  version: 'web' | 'mobile'
}

const ButtonSearch = ({ version }: Props) => {
  useEffect(() => {
    // Button to show modal
    const showModal: HTMLElement | null = document.querySelector(
      '.js-show-modal-search'
    )
    // Obtain elements to hide modal
    // Button or area modal search
    const hideModal = document.querySelectorAll('.js-hide-modal-search')
    // Modal search header
    const modalSearchHeader = document.querySelector('.modal-search-header')
    // Container to display search
    const containerSearch = document.querySelector('.container-search-header')
    function showModalSearch() {
      modalSearchHeader!.classList.add('show-modal-search')
      showModal!.style.opacity = '0'
    }
    function hideModalSearch() {
      modalSearchHeader!.classList.remove('show-modal-search')
      showModal!.style.opacity = '1'
    }
    function stopPropagation(e: Event) {
      e.stopPropagation()
    }
    showModal!.addEventListener('click', showModalSearch)
    hideModal.forEach((element) =>
      element.addEventListener('click', hideModalSearch)
    )
    containerSearch!.addEventListener('click', stopPropagation)
    return () => {
      window.removeEventListener('click', showModalSearch)
      window.removeEventListener('click', stopPropagation)
      window.removeEventListener('click', hideModalSearch)
    }
  }, [])

  return (
    <div
      className={
        version === 'mobile'
          ? 'icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search'
          : 'icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search'
      }
    >
      <i className="zmdi zmdi-search"></i>
    </div>
  )
}

export default ButtonSearch
