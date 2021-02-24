import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import { useCartState } from '../Store/Store';
import { useEffect } from 'react'

const Header = (): JSX.Element => {
  const { cart }  = useCartState();
  useEffect(() => {},[cart]);

  return (
    <div className="header">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/checkout">
        <div className="checkout">
          <div className="amount-container">
            <span>{cart.length}</span>
          </div>
          <p>Checkout</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
