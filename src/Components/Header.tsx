import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Header = (): JSX.Element => {
  const [Amount, SetAmount] = useState<any>(0);
  
  useEffect(() => {
    SetAmount(0);
  }, [])

  return (
    <div className="header">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/checkout">
        <div className="checkout">
          <div className="amount-container">
            <span>{Amount}</span>
          </div>
          <p>Checkout</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
