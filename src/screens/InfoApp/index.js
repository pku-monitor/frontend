import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Entypo, Ionicons,AntDesign } from "@expo/vector-icons";
import { Container, Txt, TxtUser } from './styles';

export default function InfoApp({ navigation }) {
  const [UserName, SetUserName]= useState('Nome Do Usuario');
    return(
      <Container>
        <ScrollView>
          <View style={{alignItems:'center'}}>
            <TxtUser>
              {UserName}
            </TxtUser>
          </View>

          <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>

          <Txt>Sobre o APP </Txt>

          <Text style={{fontSize:25}}>
            (DESCRIÇAO)
          </Text>
        </ScrollView>

          <View style={styles.container}>
            <View style={{ marginLeft: '5%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
              <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Home')}>
                <View><Entypo name="home" size={40} color={"black"} /></View>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Historico')}>
                <View><AntDesign name="solution1" size={40} color={"black"} /></View>
              </TouchableOpacity >
              <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('CadastrarProduto')}>
                <View><Ionicons name="add" size={40} color={"black"} /></View>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 30 }}>
                <View><Ionicons name="alert" size={40} color={"black"} /></View>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Login')}>
                <View><Ionicons name="log-in-outline" size={40} color={"black"} /></View>
              </TouchableOpacity>
            </View>
          </View>
      </Container>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    zIndex: 9,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
  },
});