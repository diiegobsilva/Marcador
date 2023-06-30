import React, { useState } from "react";
import {View, Text} from "react-native"
import styles from "./style"

import Titulo from "../Titulo";

export default function Main(){

    return(
        <View style={styles.boxTitle}>
            <Titulo titulo={"Eles"}/>
            <Titulo titulo={"Nós"}/>
        </View>
    )
}