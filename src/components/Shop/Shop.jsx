import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import classes from './shop.module.scss';

const shopItem = {
  id: 0,
  title: 'Test',
  price: '$6.00',
  description: 'Lorem cumque ab architecto delectus laboriosam doloremque Nesciunt nihil assumenda fugiat vitae maiores Veritatis voluptas officiis quisquam ex a. Facilis expedita alias possimus quibusdam natus aperiam. Consectetur necessitatibus ex molestiae',
}

const ShopItem = () => {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(cartActions.addItem());

  return (
    <div className={classes.shopItem}>
      <div className={classes.header}>
        <h2>{shopItem.title}</h2>
        <h3>{shopItem.price}</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{shopItem.description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  )
}

const Shop = () => {
  return (
    <>
      <h1 style={{ marginBottom: '1rem', marginTop: '3rem' }}>Buy your favorite products</h1>
      <div className={classes.shop}>
        <ShopItem />
        <ShopItem />
      </div>
    </>
  )
}

export default Shop;
