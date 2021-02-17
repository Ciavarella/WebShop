import '../Styles/ListItem.css';
import { Item } from '../Api/types';

interface ListItemProp {
  item: Item
};

const ListItem = (data: ListItemProp) => {
  return (
    <div className="item-container">
      <img src={data.item.picture} alt={data.item.name} />
    </div>
  )
}

export default ListItem;