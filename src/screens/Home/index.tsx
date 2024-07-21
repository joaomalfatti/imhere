import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home(){  


  function handleParticipantAdd(){
    console.log("Você clicou no botão de adicionar")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 19 de Julho de 2024.
      </Text>

      <View style={styles.viewForm}>
        <TextInput 
          style={styles.eventInput}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity 
          style={styles.buttonTouch}
          onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
        </TouchableOpacity>
      </View>

      <Participant name = "João Elias"/>
    </View>
  );
}