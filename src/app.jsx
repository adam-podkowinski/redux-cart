import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "preact/compat";
import classes from "./app.module.scss";
import Cart from "./components/Cart/Cart";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./components/Shop/Shop";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/Notification/Notification";

let isInitial = true;

export default function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(({ ui }) => ui.cartVisible);
  const items = useSelector(({ cart }) => cart.items);
  const notification = useSelector(({ ui }) => ui.notification);

  const sendCartData = async () => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        message: "Sending cart data...",
      })
    );

    const response = await fetch(
      "https://redux-cart-f7f6c-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(items) }
    );

    if (!response.ok) {
      throw new Error("Sending card data failed");
    }

    dispatch(
      uiActions.showNotification({
        status: "success",
        message: "Sent cart data successfully!",
      })
    );
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "Sending cart data failed",
        })
      );
    });
  }, [items, dispatch]);

  return (
    <div className={classes.app}>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <Navigation />
      {cartVisible && <Cart />}
      <Shop />
    </div>
  );
}
