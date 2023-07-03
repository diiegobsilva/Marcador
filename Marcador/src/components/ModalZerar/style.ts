import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    modalTitle: {
        width: 270,
        height: 110,
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
        marginTop: 25
      },
      
      botaoNao: {
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
        fontSize: 45,
        fontWeight: "bold"
    
    },
    buttoZerar: {
        width: 115,
        height: 35,
        backgroundColor: '#A80E0E',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      textButtonZerar: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
      },
})

export default styles