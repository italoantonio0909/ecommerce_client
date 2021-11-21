import { ButtonCart, ButtonNotify, ButtonProductFavorite } from '../button-icon'
import ButtonSearch from '../button-icon/Button-Search'

const SectionIcons = () => {
  return (
    <div className="wrap-icon-header flex-w flex-r-m">
      <ButtonSearch version="web" />
      <ButtonCart version="web" />
      <ButtonProductFavorite version="web" />
      <ButtonNotify />
    </div>
  )
}

export default SectionIcons
