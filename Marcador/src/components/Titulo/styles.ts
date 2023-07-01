import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    modalTitle: {
        width: 250,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"

    },
    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
      },
      input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
      },
    text: {
       fontSize: 15,
       fontWeight: "bold"
    },

    botao: {
        alignItems: "center",
        borderRadius: 8,
        width: "25%",
        height: 20,
        backgroundColor: "#A80E0E",
    },
    textButton : {
        color: "#fff",
        fontSize: 13,
        fontWeight: "bold"
      },

    title: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold"
    },
    
})

export default styles