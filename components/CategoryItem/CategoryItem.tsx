import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CategoriesType} from '../../Screens/Home/Home';
import style from './style';

type CategoriesProps = {
  item: CategoriesType;
  onSelect: (id: number) => void;
  isSelected: boolean;
};

const CategoryItem: FC<CategoriesProps> = ({item, onSelect, isSelected}) => {
  const {title, id} = item;
  return (
    <TouchableOpacity onPress={() => onSelect(id)}>
      <View style={style.container}>
        <Text
          style={[style.text, isSelected ? {color: 'blue'} : {color: 'black'}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
