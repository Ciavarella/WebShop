import { Item } from '../Api/types';

interface ListItemProp {
  item: Item
};

const ListItem = (data: ListItemProp) => {
  return (
    <p>{data.item.name}</p>
  )
}

export default ListItem;