import React from "react";
import { Image, Text, View } from "react-native";

export default function Contador(){
    return(
        <View>
            <Text>6</Text>
            <Image  style={{width: 50, height: 70}} source={ require("../../assets/ouros.png")}/>
            <Image  style={{width: 50, height: 50}} source={ require("../../assets/espada.png")}/>
        </View>
    )
}