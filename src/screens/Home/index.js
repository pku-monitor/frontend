import React, { useState } from 'react';
import { Text, View, ScrollView, Modal, ActivityIndicator } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DataConsumptionRequest, DataProductSuggestionRequest} from '../../store/modules/Home/actions.js'
import AppMainMenu from '../Components/AppMainMenu';
import AppTimePickerCalendar from '../Components/AppTimePickerCalendar';
import AppTimePickerTimer from '../Components/AppTimePickerTimer';
import {AppButton, AppText, AppInput, AppSeparator} from '../Components/styles'
import {ViewOfList} from './styles'
import { Ionicons } from '@expo/vector-icons'; 
import MultiSelect from 'react-native-multiple-select'; //deletar

export default function Home({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');//usar com redux do login q n esta pronto
  const [nameOfProduct, setNameOfProduct] = useState("");
  const [amountOfProduct, setAmountOfProduct] = useState("");
  const [phenylalanineConsumed, setPhenylalanineConsumed] = useState("");
  const [phenylalanineOfTheDay, setPhenylalanineOfTheDay] = useState(0);
  const [NaturalProduct, setNaturalProduct] = useState(true);

  const [dateCalendar, setDateCalendar] = useState(new Date());
  const [dateTimer, setdateTimer] = useState(new Date);
  
  const dispatch= useDispatch();
  const {products, loading, suggestionList} = useSelector((state) => state.home);
  function handleNameOfProduct(value){
    setNameOfProduct(value);
    homeSendSuggestionProductName();
  }

  function handleAmountOfProduct(value){
    setAmountOfProduct(value);
  }
  
  function homeSendConsumption(){
    if(nameOfProduct!="" || amountOfProduct!=""){
      setPhenylalanineOfTheDay(phenylalanineOfTheDay+amountOfProduct*0.1);
      dispatch(DataConsumptionRequest(nameOfProduct, amountOfProduct, phenylalanineConsumed, NaturalProduct, TimeConsumed));//add date
      setNameOfProduct("");
      setAmountOfProduct("");
    }
  }

  function homeSendSuggestionProductName(){
    if(nameOfProduct.length >= 2){
      dispatch(DataProductSuggestionRequest(nameOfProduct));
      console.log(suggestionList);
    }
  }

  return (
    <View style={{flex:1, backgroundColor:"#CDDCFE"}}>
      {/*Carregando*/}
      <Modal transparent={true}
        visible={loading}
        animationType='fade'
      >
        <View style={{flex: 1, justifyContent: "center", flexDirection: "row", justifyContent: "space-around",padding: 10, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>

      <View>
        <AppText>
          {UserName}
        </AppText>
      </View>

      <AppSeparator/>
      <ScrollView>
        <View style={{ marginLeft: '10%', marginRight: '10%'}}>
          <AppText>Consumo diário de fenilalanina</AppText>
          <View style={{ backgroundColor: "black", height: 18}}>
            <View style={{height: 18, backgroundColor: "gray", width:phenylalanineOfTheDay.toString()+"%"}}/>
          </View>
        </View>
        
        <View style={{ marginLeft: '10%', marginRight: '10%'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column'}}>
              <Text>
                Data do consumo
              </Text>
              <AppTimePickerCalendar/>
            </View>
            <View>
              <Text>
                Hora do consumo
              </Text>
              <AppTimePickerTimer/>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
            <View style={{flexDirection: "row"}}>
              {NaturalProduct == true
              ? <Ionicons name="radio-button-on" size={24} color="black"/>
              : <Ionicons name="radio-button-off" size={24} color="black" onPress={()=>setNaturalProduct(true)}/>}
              <AppText>
                Natural
              </AppText>
            </View>

            <View style={{flexDirection: "row"}}>
              {NaturalProduct == false
              ? <Ionicons name="radio-button-on" size={24} color="black"/>
              : <Ionicons name="radio-button-off" size={24} color="black" onPress={()=>setNaturalProduct(false)}/>}
              <AppText>
                Industrializado
              </AppText>
            </View>
          </View>

          <AppText style={{marginTop: 20}}> Nome do Produto</AppText>
          
          <AppInput value={nameOfProduct} placeholder="Nome do produto" onChangeText={handleNameOfProduct}/>

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