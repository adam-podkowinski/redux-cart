import { useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import Notification from "../Notification/Notification";
import classes from "./navigation.module.scss";

function Navigation() {
  const dispatch = useDispatch();
  const shopItems = useSelector(({ items }) => items);
  const totalQuantity = () =>
    Object.values(shopItems).reduce(
      (prev, current) => prev + current.quantity,
      0
    );
  const [notify, setNotify] = useState(true);

  setTimeout(() => {
    setNotify(false);
  }, 2500);

  return (
    <nav className={classes.navigation}>
      {notify && <Notification />}
      <h1>Redux Cart</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(cartActions.toggleCart());
        }}
      >
        My Cart
        <div className={classes.cartItems}>{totalQuantity()}</div>
      </button>
    </nav>
  );
}

export default Navigation;
