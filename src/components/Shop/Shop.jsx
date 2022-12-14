import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./shop.module.scss";

const shopItems = [
  {
    id: 0,
    title: "Test",
    price: 6.0,
    description:
      "Lorem cumque ab architecto delectus laboriosam doloremque Nesciunt nihil assumenda fugiat vitae maiores Veritatis voluptas officiis quisquam ex a. Facilis expedita alias possimus quibusdam natus aperiam. Consectetur necessitatibus ex molestiae",
  },
  {
    id: 1,
    title: "A book",
    price: 12.0,
    description: "A nice book 👍👍👍👍",
  },
];

function ShopItem(item) {
  const dispatch = useDispatch();
  const { price, description, title } = item;

  const addToCart = () => dispatch(cartActions.addItem(item));

  return (
    <div className={classes.shopItem}>
      <div className={classes.header}>
        <h2>{title}</h2>
        <h3>${price.toFixed(2)}</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{description}</p>
        <button type="button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

function Shop() {
  return (
    <>
      <h1 style={{ marginBottom: "1rem", marginTop: "3rem" }}>
        Buy your favorite products
      </h1>
      <div className={classes.shop}>
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </>
  );
}
export default Shop;
