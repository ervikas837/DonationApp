import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import ListItem from '../../components/ListItem/ListItem';
import style from './Style';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import useCategories from '../../hooks/useCategories';
import useItems from '../../hooks/useItems';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';

export type ListItemType = {
  title: string;
  location: string;
  image?: string;
  id: number;
  categoryId: number;
  description: string;
};

export type CategoriesType = {
  title: string;
  id: number;
};

const Home: FC = () => {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesErorr,
  } = useCategories();

  const {
    items: displayData,
    isLoading: itemsLoading,
    error: itemError,
  } = useItems();

  const user = useSelector((state: RootState) => state.user);
  const [data, setData] = useState(displayData);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const navigation = useNavigation<ScreenNavigationProp<'Details'>>();

  useEffect(() => {
    setData(displayData);
  }, [displayData]);

  function onSelectCategory(id: number) {
    setSelectedCategoryId(id);
    if (id == 1) {
      setData(displayData);
    } else {
      const filteredData = displayData.filter(item => item.categoryId == id);
      setData(filteredData);
    }
  }

  function onSelectListItem(item: ListItemType) {
    navigation.navigate('Details', {item});
  }

  if (categoriesLoading || itemsLoading) {
    return (
      <ActivityIndicator
        testID="activity-indicator"
        size="large"
        color={'#0000ff'}
      />
    );
  }

  if (categoriesErorr || itemError) {
    return <Text>Error Loading State</Text>;
  }

  return (
    <View>
      <View style={style.listContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <Header name={user.firstName + ' ' + user.lastName} />
              <View style={style.categoriesContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={categories}
                  renderItem={({item}) => (
                    <CategoryItem
                      item={item}
                      onSelect={onSelectCategory}
                      isSelected={item.id == selectedCategoryId}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={({item}) => (
            <ListItem item={item} onSelect={onSelectListItem} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
