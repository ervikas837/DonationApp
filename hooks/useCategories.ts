import {useState, useEffect} from 'react';
import {fetchCategories} from '../apis/home/homeApi';
import {CategoriesType} from '../Screens/Home/Home';

const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data: CategoriesType[] = await fetchCategories();
        setCategories(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);
  return {categories, loading, error};
};

export default useCategories;
