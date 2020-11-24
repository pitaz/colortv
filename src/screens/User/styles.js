import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  pictureWrapper: {
    width: width / 2.18,
    margin: (width / 100) * 2,
    borderRadius: 2,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  headerImage: {
    width: '100%',
    height: 400,
  },
  roundBorder: {
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
  },
  roundImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'white',
  },
  label: {
    paddingVertical: '2%',
    paddingLeft: '4%',
    fontWeight: '700',
  },
  bio: {
    paddingVertical: '2%',
    paddingLeft: '4%',
    fontWeight: '400',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: '2%',
    paddingLeft: '4%',
    textAlign: 'center',
  },
  backbtn: {
    alignItems: 'center',
    position: 'absolute',
    top: '15%',
    backgroundColor: 'red',
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
  list: {
    alignSelf: 'center',
  },
});
