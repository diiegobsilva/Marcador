import { StyleSheet, ImageBackground, View , Image} from 'react-native';
import Main from './src/components/Main';
import { Provider } from './src/contexts';

export default function App() {
  return (
    <Provider>
        <View style={styles.container}>
          <ImageBackground source={require('./src/assets/planoFundo.jpg')} 
            style={styles.backgroundTela}
            imageStyle={{ opacity: 0.3 }} >
          <Main/>
          </ImageBackground>
        
      </View>
    </Provider>

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
