import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const Header = ({user, navigation}) => {
  return (
    <View>
      <Image
        source={{uri: user?.profile_image?.large?.split('&')[0]}}
        style={styles.headerImage}
      />
      <View style={styles.roundBorder}>
        <Image
          source={{
            uri: user?.profile_image?.large,
          }}
          style={styles.roundImage}
        />
      </View>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.name}>Name: {user?.name}</Text>
        <Text style={styles.name}>Username: @{user?.username}</Text>
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.bio}>{user?.bio ?? 'Bio not available'}</Text>
        <Text style={styles.label}>Photos</Text>
      </View>
    </View>
  );
};

export default Header;
