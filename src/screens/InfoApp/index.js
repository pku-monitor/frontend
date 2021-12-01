import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppMainMenu from '../Components/AppMainMenu';

export default function InfoApp({ navigation }) {
  const [UserName, SetUserName]= useState('Nome Do Usuario');
    return(
      <View>
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