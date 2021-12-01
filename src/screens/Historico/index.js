import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppMainMenu from '../Components/AppMainMenu';
import { ViewOfList } from './styles'
import {AppText, AppSeparator} from '../Components/styles'
import {useSelector} from 'react-redux';
import AppTimePickerCalendar from '../Components/AppTimePickerCalendar';

export default function Historico({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');
  const {products} = useSelector((state) => state.home);
  return (
    <View style={{ flex: 1, backgroundColor: "#CDDCFE" }}>
      <View>
        <AppText>
          {UserName}
        </AppText>
      </View>
      <AppSeparator />

      <ScrollView style={{marginBottom:50}}>
          <AppText style={{ textAlign: 'center', fontSize: 25 }}>Historico</AppText>
          <View style={{marginTop:'5%', marginLeft:'15%', marginRight:'15%'}}>
            <AppTimePickerCalendar/>
          </View>
        <View style={{marginTop:'5%'}}>
          {products.map((dados, index) => <ViewOfList key={index}><Text style={{ fontSize: 30 }}>{dados.productsName} {dados.TotalPhenylalanine}</Text></ViewOfList>)}
        </View>
      </ScrollView>
      
      <AppMainMenu />
    </View>
  )
}
