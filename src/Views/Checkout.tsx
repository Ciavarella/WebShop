import { getCart } from '../Api/Client';
import { useEffect, useState } from 'react';

const Checkout = (): JSX.Element => {
  const [Cart, SetCart] = useState<any | null>([])

  useEffect(() => {
    let mounted: Boolean = true;
    const getCartProducts = async () => {
      const res = await getCart();
      if(mounted) {
        SetCart(res);
      }
    };
    getCartProducts();

  // console.log('carthere', Cart);
    return function cleanUp(): void {
      mounted = false;
    }
  });


  return (
    <div className="home">
      <div className="detail-container">
        <p>Hello</p>
      </div>
    </div>
  )
};

export default Checkout;