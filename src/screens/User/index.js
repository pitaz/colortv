import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ImageView from 'react-native-image-viewing';
import {styles} from './styles';
import EmptyPlaceholder from '../../components/EmptyState';
import PhotoRow from './Photo';
import Header from './Header';

const User = ({route, navigation}) => {
  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = (index) => {
    setImageIndex(index);
    toggle();
  };
  const toggle = () => setIsVisible(!isVisible);

  const numColumns = 2;
  const {user} = route.params;
  const images = user?.photos?.map((i) => ({uri: i?.urls?.small}));
  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <Header user={user} navigation={navigation} />
        )}
        contentContainerStyle={styles.list}
        data={user?.photos}
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (
          <PhotoRow
            photos={item}
            onSelect={() => onSelect(index)}
            index={index}
          />
        )}
        ListEmptyComponent={EmptyPlaceholder}
      />
      <ImageView
        images={images}
        imageIndex={currentImageIndex}
        visible={isVisible}
        onRequestClose={toggle}
      />
    </>
  );
};

export default User;
