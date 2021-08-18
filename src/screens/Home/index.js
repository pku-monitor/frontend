import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DataConsumptionRequest} from '../../store/modules/Home/actions.js'
import AppMainMenu from '../Components/AppMainMenu';
import AppTimePickerCalendar from '../Components/AppTimePickerCalendar';
import AppTimePickerTimer from '../Components/AppTimePickerTimer';
import {AppButton, AppText, AppInput, AppSeparator} from '../Components/styles'
import {ViewOfList} from './styles'


export default function Home({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');//usar com redux do login q n esta pronto
  const [nameOfProduct, setNameOfProduct] = useState("");
  const [amountOfProduct, setAmountOfProduct] = useState("");
  const [phenylalanineConsumed, setPhenylalanineConsumed] = useState("");
  const [phenylalanineOfTheDay, setPhenylalanineOfTheDay] = useState(0);
  
  const dispatch= useDispatch();
  const {products} = useSelector((state) => state.home);


  function changeBarPercent(){
    let percentValue=0;
    percentValue/=50;
    return {
      height: 18,
      width: String(percentValue)+'%',
      backgroundColor: "gray",
    }
  };
  
  function handleNameOfProduct(value){
    setNameOfProduct(value);
  }

  function handleAmountOfProduct(value){
    setAmountOfProduct(value);
  }

  function homeSendConsumption(){
    if(nameOfProduct!="" || amountOfProduct!=""){
      dispatch(DataConsumptionRequest(nameOfProduct, amountOfProduct, phenylalanineConsumed));//add date
      setNameOfProduct("");
      setAmountOfProduct("");
    }
    //changeBarPercent();
  }

  return (
    <View style={{flex:1, backgroundColor:"#CDDCFE"}}>
        <View>
          <AppText>
            {UserName}
          </AppText>
        </View>

      <AppSeparator/>
      <ScrollView style={{marginBottom:50}}>

        <View style={{ marginLeft: '10%', marginRight: '10%' }}>
          <AppText>Consumo diário de fenilalanina</AppText>

          <View style={{ backgroundColor: "black", height: 18 }}>
            <View style={changeBarPercent()}/>
          </View>
        </View>
        
        <View style={{ marginLeft: '10%', marginRight: '10%'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column'}}>
              <Text>
                Data do consumo
              </Text>
              <AppTimePickerCalendar value={'teste'}/>
            </View>
            <View>
              <Text>
                Hora do consumo
              </Text>
              <AppTimePickerTimer/>
            </View>
          </View>

          <AppText>Nome do Produto</AppText>
          
          <AppInput value={nameOfProduct} placeholder="Nome do produto" onChangeText={handleNameOfProduct} />
          
          <AppText>Quantidade consumida</AppText>

          <AppInput value={amountOfProduct} keyboardType='numeric' placeholder="Quantidade(gramas)" onChangeText={handleAmountOfProduct}/>
          
          <AppText>Fenilalanina consumida</AppText>

          <AppText>{phenylalanineOfTheDay}</AppText>
          
          <View style={{alignItems: 'center', marginTop:'5%'}}>
            <AppButton onPress={homeSendConsumption}>
              <AppText>CONFIRMAR</AppText>
            </AppButton>
          </View>
        </View>

        <AppSeparator style={{marginTop:'7%'}}/>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 25 }}>CONSUMIDOS HOJE</Text>
            {products.map((dados, index)=><ViewOfList key={index}><Text style={{fontSize:30 }}>{dados.productsName} {dados.TotalPhenylalanine}</Text></ViewOfList>)}
        </View>
      </ScrollView>

      <AppMainMenu />
      
    </View>
  );
}
