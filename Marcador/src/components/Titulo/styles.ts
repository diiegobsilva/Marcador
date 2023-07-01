import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    modalTitle: {
        width: 250,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#fff",
        position: "absolute",
        top: "50%",
        marginTop: -75, 
        borderRadius: 20,
        borderWidth: 1,
      },

    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold"
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
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5
      },
      
      botaoFechar: {
        alignItems: "center",
        borderRadius: 5,
        width: "25%",
        height: "100%",
        backgroundColor: "#A80E0E",
        marginRight: "10%",
      },
      
      botaoOk: {
        alignItems: "center",
        borderRadius: 5,
        width: "25%",
        height: "100%",
        backgroundColor: "#A80E0E",
        marginLeft: "10%",
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