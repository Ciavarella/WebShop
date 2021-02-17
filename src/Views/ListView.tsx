import '../Styles/ListView.css';
import { Item } from '../Api/types';
import ListItem from '../Components/ListItem';
import Spinner from '../Components/Spinner';
import { getAllItems } from '../Api/Client';
import { useEffect, useState } from 'react';

const ListView = () => {
  const [Items, SetItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const res: any = await getAllItems();
      SetItems(res);
    };
    getItems();
  });

  return (
    <div className="home">
      {Items.length > 1 ? Items.map((item, index): JSX.Element =>
        <ListItem key={index} item={item} />
      ) : <Spinner />}
    </div>
  );
}

export default ListView;