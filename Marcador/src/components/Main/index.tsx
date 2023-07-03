import React, { useState } from "react";
import {View, Text, Image} from "react-native"
import styles from "./style"
import { Provider } from "../../contexts/pontos"
import Titulo from "../Titulo";
import Botao from "../Botao";
import Contador from "../Contador";


export default function Main() {
    return (
      <Provider>
        <View style={styles.boxTitle}>
          <View style={styles.titulo}>
            <Titulo style={styles.tituloDireita} titulo={"Eles"} />
            <Titulo style={styles.tituloEsquerda} titulo={"Nós"} />
          </View>
          <View style={styles.container}>
            <Contador />
            <View style={styles.linhaPontilhada} />
            <Contador />
          </View>
          <Botao />
        </View>
      </Provider>
    );
  }
  
  
  
  
  
  
  
  