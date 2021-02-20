import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>Checkout</p>
    </div>
  );
}

export default Header;
