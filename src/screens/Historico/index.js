import React from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Login/styles';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

const Historico = ({ navigation }) => {
  return (
        <Container>
        <Txt>Tela</Txt>
        <Txt>de</Txt>
        <Txt>Histórico</Txt>
        <Button onPress={() => navigation.navigate('Home')}>
          <TxtButton>CONFIRMAR</TxtButton>
        </Button>


  <View style={styles.container}>
    <View style={{ marginLeft:'5%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Home')}>
            <View><Entypo name="home" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Historico')}>
            <View><AntDesign name="solution1" size={40} color={"black"} /></View>
          </TouchableOpacity >
          <TouchableOpacity style={{ borderRadius: 30 }}>
            <View><Ionicons name="add" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('InfoApp')}>
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
    bottom: 0,
    height: '8%',
    zIndex: 9,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
  },
});


export default Historico;