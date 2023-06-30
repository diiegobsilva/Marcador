import { StyleSheet, ImageBackground, View , Image} from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/planoFundo.jpg')} 
        style={styles.backgroundTela}
        imageStyle={{ opacity: 0.3 }} >
        <Main/>
      </ImageBackground>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "black",
  },
  backgroundTela: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
