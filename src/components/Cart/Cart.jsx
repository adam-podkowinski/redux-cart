import { useSelector } from "react-redux";
import classes from "./cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const shopItems = useSelector(({ cart }) => cart.items);
  return (
    <div className={classes.cart}>
      <h1 className={classes.header}>Your shopping cart</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.keys(shopItems).length !== 0 ? (
          Object.entries(shopItems).map(([, item]) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p>Your cart is empty. 😢</p>
        )}
      </ul>
    </div>
  );
}
export default Cart;
