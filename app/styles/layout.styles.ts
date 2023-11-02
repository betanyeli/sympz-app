import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,

    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabBarButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'pink',
  },
});

export default styles;
