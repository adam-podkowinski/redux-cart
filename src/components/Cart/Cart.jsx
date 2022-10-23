import classes from './cart.module.scss';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h1 className={classes.header}>
        Your shopping cart
      </h1>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li>
          <CartItem />
        </li>
      </ul>
    </div>
  )
}

export default Cart;
