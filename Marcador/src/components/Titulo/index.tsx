import React, { useState } from "react";

import { View, Text, Modal, Alert, TextInput, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";


export default function Titulo({titulo, style}:any){

    const [modalVisible, setModalVisible] = useState(false);
    const [ title, setTitle ] = useState(titulo)
    

    return(
        <View style={style}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible);
                
                }}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.formLabel}>Digite o Nome:</Text>
                        <TextInput 
                            placeholder="Nome"
                            onChangeText={(e) => setTitle(e)}
                            style={styles.input}
                            value={title}
                        />
                        <View style={styles.botao}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={styles.botaoFechar}
                            >
                                <Text style={styles.textButton}>Fechar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={styles.botaoOk}
                            >
                                <Text style={styles.textButton}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
        
    )
}

