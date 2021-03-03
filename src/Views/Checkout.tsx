import { useCartState, useCartDispatch } from '../Store/Store';
import '../Styles/Checkout.css';

const Checkout = (): JSX.Element => {
  const { cart } = useCartState();
  const dispatch: any = useCartDispatch();

  const decrementQuantity = (id: number): void => {
    dispatch({ type: 'decrementQuantity', payload: id });
  }

  const incrementQuantity = (id: number): void => {
    dispatch({ type: 'incrementQuantity', payload: id });
  }

  const removeProduct = (id: number): void => {
    dispatch({ type: 'removeProduct', payload: id });
  }

  const calcTotal = (): void => {
    let total: number = 0;
    cart.forEach((product: any) => {
      total += product.price * product.amount;
    });
    alert(`Your total price is ${total}`);
  }

  return (
    <div className="App">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="column">
          {cart.length >= 1 ?
            <div className="row">
              {cart.map((element: any, index: number) =>
                <div key={index}>
                    <img className="color" alt={element.name} src={element.picture} />
                    <p>{element.name}</p>
                    <div className="quantity-wrapper">
                      <button onClick={() => decrementQuantity(element.id)}>-</button>
                      <p>{element.amount}</p>
                      <button onClick={() => incrementQuantity(element.id)}>+</button>
                    </div>
                    {element.power !== 0 ?
                      <p>Power: {element.power}</p>
                    : '' }
                    {element.storage !== '' ?
                      <p>Storage: {element.storage}</p>
                    : '' }
                    <p>Color: {element.extra.color}</p>
                    <button onClick={() => removeProduct(element.id)}>Remove</button>
                </div> )}
            </div>
             : <p>No items in your cart</p> }
             {cart.length >= 1 ? 
              <div className="mg-top">
                <button onClick={calcTotal}>Go to payment</button>
              </div> : '' }
        </div>
      </div>
    </div>
  )
};

export default Checkout;
