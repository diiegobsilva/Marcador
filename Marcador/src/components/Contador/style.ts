import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coluna: {
        flexDirection: "row",
   
        marginTop: 28,

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

    text: {
        color: "#fff",
        fontSize: 80,
        fontWeight: "bold",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 25
    },

    naipeOuros: {
        width: 70,
        height: 90,
        margin: 5,
        backgroundColor: "rgba(255, 255, 255, 0.09)",
        borderRadius: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        resizeMode: "cover",
        shadowColor: "#fff",
    },

    naipeEspada: {
        width: 80,
        height: 90,
        margin: 5,
        backgroundColor: "rgba(255, 255, 255, 0.09)",
        borderRadius: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        resizeMode: "cover",
        shadowColor: "#fff",
        
    },

    container: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    viewEsquerda: {
        width: "40%",
        alignItems: "center",
    },

    viewDireita: {
        width: "40%",
        alignItems: "center",
    },

    textButtonZerar: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
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

});


export default styles