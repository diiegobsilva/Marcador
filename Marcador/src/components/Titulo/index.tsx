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
                        <TextInput 
                            placeholder="Nome"
                            onChangeText={(e) => setTitle(e)}
                            style={styles.text}
                            value={title}
                        />
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.botao}
                        >
                            <Text style={styles.textButton}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
        
    )
}

