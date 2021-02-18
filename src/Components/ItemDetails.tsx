import '../Styles/ItemDetails.css';
import { getItemById } from '../Api/Client';
import { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import { Item } from '../Api/types';
import { useParams } from "react-router-dom";

const ItemDetails = (): JSX.Element => {
  const [Details, SetDetails] = useState<Item | null>(null);
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

  return (
    <div className="App">
      {Details ?
      <div className="detail-container">
        <h2>{Details.brand}</h2>
        <h3>{Details.name}</h3>
        <p>{Details.weight} kg</p>
        <p>{Details.price}:-</p>
      </div>
      : <Spinner />}
    </div>
  )
}

export default ItemDetails;
