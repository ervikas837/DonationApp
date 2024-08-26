import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';
import {ListItemType} from '../../Screens/Home/Home';

type ListItemProps = {
  item: ListItemType;
  onSelect: (listItem: ListItemType) => void;
};

const ListItem: FC<ListItemProps> = ({item, onSelect}) => {
  const {title, location, image} = item;
  console.log('image==', image);
  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View style={style.container}>
        <View style={style.textContainer}>
          <Text style={style.text}>{title}</Text>
          <Text>{location}</Text>
        </View>
        {image ? (
          <Image testID="image" style={style.image} source={{uri: image}} />
        ) : (
          <Image
            testID="image"
            style={style.image}
            source={require('../../src/assets/images/default_post.png')}
          />
        )}
        <View style={style.seperator} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
