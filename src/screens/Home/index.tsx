import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home(){  

  /* Esse aqui estado da lista dos participantes*/
  const [participants, setParticipants] = useState<string[]>([]);

  /* Esse aqui estado dos participantes*/
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd(){
    /* Caso o indíviduo exista, ele não vai adicionar.*/
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.")
    }
    
    /* Aqui e depois da verificação, para adicionar o participante.*/
    setParticipants(prevState =>[...prevState, participantName]);
    setParticipantName('');
    
  }

  function handleParticipantRemove(name: string){
    
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
            /*Deletar o participante para que ele some do array*/
        onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant != name))
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
          onChangeText={setParticipantName}
          value={participantName}
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