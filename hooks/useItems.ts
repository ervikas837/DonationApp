import {useState, useEffect} from 'react';
import {fetchListItems} from '../apis/home/homeApi';
import {ListItemType} from '../Screens/Home/Home';

const useItems = () => {
  const [items, setItems] = useState<ListItemType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response: ListItemType[] = await fetchListItems();
        setItems(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);
  return {items, isLoading, error};
};

export default useItems;
