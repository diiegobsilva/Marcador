import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  viewBotao: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTruco: {
    width: '65%',
    height: 55,
    backgroundColor: '#A80E0E',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    
  },
  buttoZerar: {
    width: '35%',
    height: 35,
    backgroundColor: '#A80E0E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textButtonZerar: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default styles