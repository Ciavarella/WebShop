import '../Styles/ListItem.css';
import { Item } from '../Api/types';
import { Link } from 'react-router-dom';

interface ListItemProp {
  item: Item
};

const ListItem = (data: ListItemProp): JSX.Element => {
  return (
    <div className="item-container">
      <Link to={`/details/${data.item.id}`}>
          <img src={data.item.picture} alt={data.item.name} />
          <div className="center">
            <h1>{data.item.name}</h1>
            <h2>{data.item.price}:-</h2>
          </div>
      </Link>
    </div>
  )
}

export default ListItem;
