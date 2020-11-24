import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  list: {
    marginTop: 40,
  },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 80,
    shadowColor: '#f4f4f4',
    shadowOpacity: 0.1,
    borderRadius: 12,
    padding: '2%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 13,
    flexDirection: 'row',
    marginVertical: '2%',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    justifyContent: 'space-evenly',
    height: '100%',
    flexGrow: 1,
    paddingHorizontal: '2%',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  bioLabel: {
    fontSize: 12,
    overflow: 'scroll',
    width: width / 1.5,
  },
  pageWrapper: {
    flex: 1,
  },
});
