import image from '../../static/images/item-cart-01.jpg'
import CartItemTable from './Cart-Item-Table'

const CartTable = () => {
  const items = [
    {
      id: 1,
      title: 'Fresh Strawberries',
      price: 120,
      image: image,
      total: 120,
    },
    {
      id: 1,
      title: 'Fresh Strawberries',
      price: 120,
      image: image,
      total: 120,
    },
  ]

  return (
    <table className="table-shopping-cart">
      <thead>
        <tr className="table_head">
          <th className="column-1">Productos</th>
          <th className="column-2"></th>
          <th className="column-3">Precio</th>
          <th className="column-4">Cantidad</th>
          <th className="column-5">Total</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map((element) => (
            <CartItemTable
              key={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
              total={element.total}
            />
          ))}
      </tbody>
    </table>
  )
}

export default CartTable
