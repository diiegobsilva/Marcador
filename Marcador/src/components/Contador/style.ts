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
        fontSize: 50,
        fontWeight: "bold",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },

    naipeOuros: {
        width: 50,
        height: 70,
        margin: 5,
        marginTop: 30
    },

    naipeEspada: {
        width: 60,
        height: 70,
        margin: 5,
        marginTop: 30
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