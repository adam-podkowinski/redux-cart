import { useSelector } from 'react-redux'
import classes from './app.module.scss'
import Cart from './components/Cart/Cart'
import Navigation from './components/Navigation/Navigation'
import Shop from './components/Shop/Shop'

export function App() {
  const cartVisible = useSelector(({ visible }) => visible);
  return (
    <div className={classes.app}>
      <Navigation />
      {cartVisible && <Cart />}
      <Shop />
    </div>
  )
}
