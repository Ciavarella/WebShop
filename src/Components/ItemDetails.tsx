import '../Styles/ItemDetails.css';
import { getItemById, addItemToCart } from '../Api/Client';
import { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import { Item } from '../Api/types';
import { useParams } from "react-router-dom";

interface TempCartDetails {
  id: Number,
  extra: any,
  amount: number,
}

const ItemDetails = (): JSX.Element => {
  const [Details, SetDetails] = useState<Item | null>(null);
  const [TempCart, SetTempCart] = useState<TempCartDetails | null>(null);

  let params = useParams();

  useEffect(() => {
    let mounted: Boolean = true;

    const getDetails = async (params: any) => {
      const res: Item | string = await getItemById(parseInt(params.id));
      if (mounted) {
        SetDetails(res);
      }
    };
    getDetails(params);

    return function cleanUp(): void {
      mounted = false;
    };
  });

  const addToCart = async () => {
    if(TempCart) {
      const res = await addItemToCart(TempCart.amount, TempCart.extra, TempCart.id);
      console.log("res", res);
    } else {
      return;
    }
  }

  const style = {
    margin: "0"
  };

  return (
    <div className="App">
      {Details ?
      <div className="detail-container">
        <h1>{Details.brand}</h1>
        <h2>{Details.name}</h2>
        <div className={Details.available ? "product-container" : "product-container grey"}>
          {Details.options.map((option, index) => (
            <div className="product" key={index}>
              <img className="color" src={Details.picture} alt="Product" />
              <div className="text-container">
                <p>Left in stock: {option.quantity}</p>
                {/* Need to check storage and other options here */}
                <p>Color: {option.color}</p>
                <label>
                Amount: 
                  <input
                    name="amount"
                    type="number"
                    min="0"
                    onChange={e => SetTempCart({amount: parseInt(e.target.value), extra: option.color, id: Details.id})}
                    max={option.quantity.toString()}
                    />
                </label>
                <button onClick={addToCart}>{Details.available ? "Add to Card" : "Unavailable"}</button>
              </div>
            </div>
          ))}
        </div>
        <h2 style={style}>Specifications</h2>
        <div>
          <p>Price: {Details.price} :-</p>
          <p>Weight: {Details.weight} kg</p>
        </div>
      </div>
      : <Spinner />}
    </div>
  )
}

export default ItemDetails;
