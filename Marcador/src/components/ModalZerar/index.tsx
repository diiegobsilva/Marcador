import React, { useState } from "react";

import { View, Text, Modal, Alert, TextInput, Pressable, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { useContexto } from "../../hook";


export default function ModalZerar({ modal }: any) {

    const [modalVisible, setModalVisible] = useState(false);
    const { setResetPontos } = useContexto();

    const zerarPontos = () => {
        setResetPontos(true);
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);

                }}>
                <View style={styles.modalTitle}>
                    <Text style={styles.formLabel}>Deseja reiniciar os Pontos?</Text>
                    
                    <View style={styles.botao}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false)
                            }}
                            style={styles.botaoNao}
                        >
                            <Text style={styles.textButton}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botaoOk}
                            onPress={() => {
                                zerarPontos()
                                setModalVisible(false)
                            }}
                        >
                            <Text style={styles.textButton}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => {setModalVisible(true)}}
                style={styles.buttoZerar}>
                <Text style={styles.textButtonZerar} >Zerar Pontos</Text>
            </TouchableOpacity>
        </View>

    )
}