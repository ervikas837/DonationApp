import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import style from './Style';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {ListItemType} from '../Home/Home';
import CustomButton from '../../components/Button/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getFontFamily} from '../../src/assets/fonts/helper';

type DetailsScreenProps = {
  route: RouteProp<{params: {item: ListItemType}}>;
};

const Details: FC<DetailsScreenProps> = ({route}) => {
  const {item} = route.params;
  const [imageUri, setImageUri] = useState(item.image);

  useEffect(() => {
    setImageUri(item.image);
  }, [item]);

  function handleDonate() {}

  return (
    <View>
      <ScrollView testID="detail-scroll">
        <View>
          <Image
            key={item.id}
            style={style.image}
            source={{uri: imageUri}}
            resizeMode="cover"
            testID="item-image"
          />
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.location}>{item.location}</Text>
          <Text style={style.description}>{item.description}</Text>
        </View>
      </ScrollView>
      <CustomButton
        title="Donate"
        onPress={handleDonate}
        textStyle={style.buttonTextStyle}
        containerStyle={{width: '90%'}}
      />
    </View>
  );
};

export default Details;
