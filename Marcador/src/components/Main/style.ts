import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
      width: "100%",
      height: "100%"
    },
    titulo: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "row",
    },

    tituloEsquerda: {
      width: "40%",
      alignItems: "center",
    },
    
    tituloDireita: {
      width: "40%",
      alignItems: "center",
    },
    container: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    linhaPontilhada: {
      width: 2,
      height: "100%",
      backgroundColor: "#fff",
      borderStyle: "dashed",
      position: "absolute",
      left: "50%",
      top: 0,
      transform: [{ translateX: -1 }],
    },
    
  });
   
  export default styles