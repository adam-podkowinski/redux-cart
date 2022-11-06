import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./navigation.module.scss";

function Navigation() {
  const dispatch = useDispatch();
  const shopItems = useSelector(({ cart }) => cart.items);

  const totalQuantity = () =>
    Object.values(shopItems).reduce(
      (prev, current) => prev + current.quantity,
      0
    );

  return (
    <nav className={classes.navigation}>
      <h1>Redux Cart</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(uiActions.toggle());
        }}
      >
        My Cart
        <div className={classes.cartItems}>{totalQuantity()}</div>
      </button>
    </nav>
  );
}

export default Navigation;
