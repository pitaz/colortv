import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {styles} from './styles';

const UserRow = ({user}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('user', {user})}>
      <Image source={{uri: user?.profile_image?.medium}} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.label}>{user?.name}</Text>
        <Text style={styles.label}>@{user?.username}</Text>
        <Text style={styles.bioLabel} numberOfLines={1}>
          {user?.bio}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserRow;
