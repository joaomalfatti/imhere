import React from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home(){  

  const participants = ['Alcimar', 'João', 'Eberson', 'Ewerton', 'Daniel', 'Rogério', 'Junior', 'Helena'];


  function handleParticipantAdd(){
    if(participants.includes("João")){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.")
    }
    
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert(`${name} foi Deletado!`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

      {/* Flatlist não contém presença de nome*/}
      {/*<FlatList 
        data={[]}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name ={item}
            onRemove={() => handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione os participantes na sua lista de eventos.
          </Text>
        )}
      />*/}

      {/* Flatlist com presença de vários nomes.*/}
      <FlatList    
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name ={item}
            onRemove={() => handleParticipantRemove(item)}
            />
        )}
      />

    </View>
  );
}