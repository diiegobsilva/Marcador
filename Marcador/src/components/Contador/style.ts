import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coluna: {
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

    text: {
        color: "#fff",
        fontSize: 70,
        fontWeight: "bold",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 25
    },

    naipeOuros: {
        width: 60,
        height: 80,
        margin: 5,
        marginTop: 40,

    },

    naipeEspada: {
        width: 70,
        height: 80,
        margin: 5,
        marginTop: 40,
      
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

});


export default styles