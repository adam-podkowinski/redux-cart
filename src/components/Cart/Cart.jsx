import { useSelector } from "react-redux";
import classes from "./cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(({ items }) => items);
  return (
    <div className={classes.cart}>
      <h1 className={classes.header}>Your shopping cart</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.keys(items).length !== 0 ? (
          Object.entries(items).map(([_, item]) => {
            return <CartItem key={item.id} {...item} />;
          })
        ) : (
          <p>Your cart is empty. 😢</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
