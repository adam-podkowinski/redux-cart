import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import classes from './cartItem.module.scss';

const CartItem = ({ id, price, quantity, title }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    return dispatch(cartActions.removeItem(id));
  }
  const addItemHandler = () => {
    return dispatch(cartActions.addItem({ id }));
  };

  return (
    <li className={classes.cartItem}>
      <div className={classes.heading}>
        <h1>{title}</h1>
        <h2>${(price * quantity).toFixed(2)}
          <span>(${price.toFixed(2)}/item)</span>
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>x{quantity}</p>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem;
