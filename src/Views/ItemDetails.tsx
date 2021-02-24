import '../Styles/ItemDetails.css';
import { getItemById } from '../Api/Client';
import { useEffect, useState } from 'react';
import { useCartDispatch } from '../Store/Store';
import Spinner from '../Components/Spinner';
import { Item } from '../Api/types';
import { useParams } from 'react-router-dom';

interface TempCartDetails {
  id: Number,
  extra: any,
  amount: number,
}

const ItemDetails = (): JSX.Element => {
  const [Details, SetDetails] = useState<Item | null>(null);
  const [TempCart, SetTempCart] = useState<TempCartDetails | null>(null);
  const dispatch: any = useCartDispatch();
  let params = useParams();

  useEffect(() => {
    const getDetails = async (params: any) => {
      const res: Item | string = await getItemById(parseInt(params.id));
        SetDetails(res);
    };
    getDetails(params);
  },[params]);

  const addToCart = () => {
    dispatch({ type: 'addToCart', payload: TempCart })
  }

  const changeColor = (e: any, option: any): void => {
    console.log('option', option);
    // SetTempCart here but just the extra params.
    let cards = document.querySelectorAll('.card');
    Array.prototype.forEach.call(cards, function(card) {
      card.style.border = '2px solid black';
    });
    e.target.style.border = '2px solid #6fd296';
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
            <div className="product">
              <img className="color" src={Details.picture} alt="Product" />
              <p>Options:</p>
              <div className="text-container">
                {Details.options.map((option, index) => (
                  <div key={index} onClick={(e) => {changeColor(e, option)}} className="card">
                    {option.color ? <p>Color: {option.color}</p> : ''}
                    {option.storage ? option.storage.map(el => (
                      <p key={el + 1}>Storage: {el}</p>
                    )) : ''}
                    {option.power ? option.power.map(el => (
                      <p key={el + "1"}>Power: {el}</p>
                    )) : ''}
                    <p>Quantity: {option.quantity}</p>
                  </div>
                ))}
              </div>
              <label>
                Amount: 
                  <input
                    name="amount"
                    type="number"
                    min="0"
                    // onChange={e => SetTempCart({amount: parseInt(e.target.value), extra: option.color, id: Details.id})}
                    // max={option.quantity.toString()}
                    />
                </label>
              <button onClick={addToCart}>{Details.available ? "Add to Card" : "Unavailable"}</button>
            </div>
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
