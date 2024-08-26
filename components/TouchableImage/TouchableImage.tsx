import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import images from '../../src/assets/images/ImageMap';

type TouchableImageProps = {
  image: keyof typeof images;
};

const TouchableImage: FC<TouchableImageProps> = ({image}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image testID="account-icon" source={images[image]} />
      </TouchableOpacity>
    </View>
  );
};

export default TouchableImage;
