import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const EmptyPlaceholder = () => (
  <Text style={styles.emptyText}>No result(s) found</Text>
);

export default EmptyPlaceholder;
