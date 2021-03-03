import '../Styles/ItemDetails.css';
import { getItemById } from '../Api/Client';
import { useEffect, useState } from 'react';
import { useCartDispatch } from '../Store/Store';
import Spinner from '../Components/Spinner';
import { Item, Options } from '../Api/types';
import { useParams } from 'react-router-dom';
interface TempCartDetails {
  id: Number,
  extra: Options,
  amount: number,
  storage: string,
  power: number
}

const detail = {
  id: 0,
  name: '',
  brand: '',
  price: '',
  picture: '',
  available: true,
  weight: 0,
  options: [
    {
      color: '',
      quantity: 0,
      storage: [''],
      power: [0]
    }
  ]
}

const data = {
  id: 0,
  extra: {
    color: '',
    quantity: 0,
    storage: [''],
    power: [0]
  },
  amount: 0,
  storage: '',
  power: 0
}

const ItemDetails = (): JSX.Element => {
  const [Details, SetDetails] = useState<Item>(detail);
  const [TempCart, SetTempCart] = useState<TempCartDetails>(data);
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
    if(!Details.available) {
      alert('Product not available');
      return;
    }
    let amount: any = document.querySelector('#amount');
    if(TempCart.extra.quantity === 0 || !amount.value || parseInt(amount.value) === 0) {
      return;
    } else {
      if(Details.options[0].storage) {
        if(TempCart.storage === '') {
          TempCart.storage = Details.options[0].storage[0];
        }
      }

      if(Details.options[0].power) {
        if(TempCart.power === 0) {
          TempCart.power = Details.options[0].power[0];
        }
      }
      const data = {
        amount: TempCart.amount,
        extra: TempCart.extra,
        storage: TempCart.storage,
        power: TempCart.power,
        ...Details
      };
      dispatch({ type: 'addToCart', payload: data });
      let num: any = TempCart.extra.quantity;
      let newNum: any = num - amount.value;
      let selectedOption: any = Details?.options.filter(el => el.color === TempCart.extra.color);
      selectedOption[0].quantity = newNum;
      const index: any =  Details?.options.findIndex(x => x.color === TempCart.extra.color);
      Details.options[index].quantity = newNum;
      SetDetails({...Details});
      alert(`You added ${Details.name} to your cart!`);
    }
  }

  const changeColor = (e: any, option: any): void => {
    SetTempCart({ ...TempCart, extra: option });
    let cards = document.querySelectorAll('.card');
    Array.prototype.forEach.call(cards, function(card) {
      card.style.border = '2px solid black';
    });
    e.target.style.border = '2px solid #6fd296';
  }

  const setStorage = (e: any): any => {
    SetTempCart({ ...TempCart, storage: e.target.value });
    return TempCart;
  }

  const setPower = (e: any): any => {
    SetTempCart({ ...TempCart, power: parseFloat(e.target.value)});
    return TempCart;
  }

  const style = {
    margin: "0"
  };

  return (
    <div className="App">
      {Details && Details.id !== 0 ?
      <div className="detail-container">
        <h1>{Details.brand}</h1>
        <h2>{Details.name}</h2>
        <div className={Details.available ? "product-container" : "product-container grey"}>
            <div className="product">
              <img className="color" src={Details.picture} alt="Product" />
              <p>Select options:</p>
              <div className="text-container">
                {Details.options.map((option, index) =>
                  <div key={index} onClick={(e) => {changeColor(e, option)}} className="card">
                    {option.color ? <p>Color: {option.color}</p> : ''}

                    {option.storage ?
                      <div>
                        <label>Storage: </label>
                        <select value={TempCart.storage} onChange={e => setStorage(e)}> 
                          {option.storage.map(el => (
                            <option key={el} value={el}>{el}</option>
                          ))}
                        </select>
                      </div>
                    : '' }
                    
                    {option.power ? 
                      <div>
                        <label>Power: </label>
                        <select value={TempCart.power} onChange={e => setPower(e)}>
                          {option.power.map(el => (
                            <option key={el.toString()} value={el.toString()}>{el}</option>
                          ))}
                        </select>
                      </div>
                    : '' }
                   
                    <p>Quantity: {option.quantity}</p>
                  </div>
                )}
              </div>
              {Details.available ? 
                <label>
                  Amount: 
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      min="0"
                      max={TempCart.extra.quantity.toString()}
                      onChange={e => SetTempCart({...TempCart, amount: parseInt(e.target.value), id: Details.id})}
                      />
                  </label>
              : '' }
              <button onClick={addToCart}>{Details.available ? "Add to Cart" : "Unavailable"}</button>
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
