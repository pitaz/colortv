import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#2d4059',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  searchBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#2d4059',
    borderRadius: 2,
  },
  searchText: {
    color: 'white',
  },
});
