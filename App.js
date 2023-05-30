import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const PlaceholderImage = require('./assets/background-image.png');
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, this is my first React native App!</Text>
      <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
