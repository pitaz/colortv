import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Image} from 'react-native';

const PhotoRow = ({
  photos: {
    urls: {small},
  },
  onSelect,
}) => {
  return (
    <TouchableOpacity style={styles.pictureWrapper} onPress={onSelect}>
      <Image source={{uri: small}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default PhotoRow;
