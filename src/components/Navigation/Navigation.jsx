import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import Notification from '../Notification/Notification';
import classes from './navigation.module.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items);
  const totalQuantity = () => Object.values(items).reduce(
    (prev, current) => prev + current.quantity, 0
  );

  return (
    <nav className={classes.navigation}>
      <h1>Redux Cart</h1>
      <Notification />
      <button onClick={() => { dispatch(cartActions.toggleCart()) }}>
        My Cart
        <div className={classes.cartItems}>{totalQuantity()}</div>
      </button>
    </nav>
  )
}

export default Navigation;
