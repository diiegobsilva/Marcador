import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coluna: {
        flexDirection: "row",
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        marginTop: 28,
        borderRadius: 3
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
    },

    naipeEspada: {
        width: 80,
        height: 90,
        margin: 5,
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