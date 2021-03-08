import '../Styles/ListItem.css';
import { Item } from '../Api/types';
import ListItem from '../Components/ListItem';
import Spinner from '../Components/Spinner';
import { getAllItems } from '../Api/Client';
import { useEffect, useState } from 'react';

const ListView = () => {
  const [Items, SetItems] = useState<Item[]>([]);

  useEffect(() => {
    let mounted: Boolean = true;
    const getItems = async () => {
      const res: any = await getAllItems();
      if(mounted) {
        SetItems(res);
      }
    };
    getItems();

    return function cleanUp(): void {
      mounted = false;
    }
  });

  return (
    <div className="home">
      <div className="img-container">
        {Items.length >= 1 ? Items.map((item, index): JSX.Element =>
          <ListItem key={index} item={item} />
        ) : <Spinner />}
      </div>
    </div>
  );
}

export default ListView;