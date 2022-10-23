import classes from './cartItem.module.scss';

const CartItem = () => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.heading}>
        <h1>Test Item</h1>
        <h2>$18.00
          <span>($6.00/item)</span>
        </h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>x3</p>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
