import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View , Image} from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/planoFundo.jpg')} style={styles.backgroundTela}>
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
  backgroundTela:{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
