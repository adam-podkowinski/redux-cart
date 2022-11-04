import { useSelector } from "react-redux";
import { useEffect } from "preact/compat";
import classes from "./app.module.scss";
import Cart from "./components/Cart/Cart";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./components/Shop/Shop";

export function App() {
  const cartVisible = useSelector(({ visible }) => visible);
  const cart = useSelector(({ items }) => items);

  useEffect(() => {
    fetch(
      "https://redux-cart-f7f6c-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <div className={classes.app}>
      <Navigation />
      {cartVisible && <Cart />}
      <Shop />
    </div>
  );
}
