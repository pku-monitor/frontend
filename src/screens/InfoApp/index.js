import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppMainMenu from '../Components/AppMainMenu';

export default function InfoApp({ navigation }) {
  const [UserName, SetUserName]= useState('Nome Do Usuario');
    return(
      <View style={{flex: 1, backgroundColor:"#CDDCFE"}}>
        <ScrollView>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:25}}>
              {UserName}
            </Text>
          </View>

          <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>

          <Text style={{textAlign:'center', fontSize:40}}>Sobre o APP</Text>

          <Text style={{fontSize:25}}>
            (DESCRIÇAO)
          </Text>
        </ScrollView>

          <AppMainMenu/>
      </View>
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