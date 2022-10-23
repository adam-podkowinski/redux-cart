import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import classes from './navigation.module.scss';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <nav className={classes.navigation}>
      <h1>Redux Cart</h1>
      <button onClick={() => {dispatch(cartActions.toggleCart())}}>My Cart <div className={classes.cartItems}>12</div></button>
    </nav>
  )
}

export default Navigation;
