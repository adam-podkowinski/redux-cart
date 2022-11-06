import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { cartActions } from "../../store/cart-slice";
import classes from "./cartItem.module.scss";

function CartItem({ id, price, quantity, title }) {
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(cartActions.removeItem(id));
  const addItemHandler = () => dispatch(cartActions.addItem({ id }));

  return (
    <li className={classes.cartItem}>
      <div className={classes.heading}>
        <h1>{title}</h1>
        <h2>
          ${(price * quantity).toFixed(2)}
          <span>(${price.toFixed(2)}/item)</span>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>x{quantity}</p>
        <div className={classes.actions}>
          <button type="button" onClick={removeItemHandler}>
            -
          </button>
          <button type="button" onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default CartItem;
