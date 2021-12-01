import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import {useDispatch, useSelector} from 'react-redux';
import {SaveProductRequest} from '../../store/modules/Registro/actions.js'
import AppMainMenu from '../Components/AppMainMenu';
import AppBarScanner from '../Components/AppBarScanner.js';
import {AppSeparator, AppText, AppInput, AppButton} from '../Components/styles'




export default function CadastrarProduto({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');
  const [ProductsName, SetproductsName] = useState('');
  const [ManufacturerName, SetManufacturerName] = useState('');
  const [AmountOfProduct, SetAmountOfProduct] = useState('');
  const [AmountOfProtein, SetAmountOfProtein] = useState('');
  const [AmountOfPhenylalanine, SetAmountOfPhenylalanine] = useState('');
  const dispatch= useDispatch();
  //const {UserName} = useSelector(state => state.Login); quando terminar login
  
  function RegisterSaveProduct(){
    console.log(ProductsName);
    dispatch(SaveProductRequest(ProductsName, ManufacturerName, AmountOfProduct, AmountOfProtein, AmountOfPhenylalanine));
  }
  function handleProductName(value){
    SetproductsName(value)
  }
  function handleManufacturerName(value){
    SetManufacturerName(value);
  }
  function handleAmountOfProduct(value){
    SetAmountOfProduct(value);
  }
  function handleAmountOfProtein(value){
    SetAmountOfProtein(value);
    calculatingAmountOfPhenylalanine(value);
  }
  function calculatingAmountOfPhenylalanine(value){
    if(value!=''){
      const att=parseInt(value)*50;
      SetAmountOfPhenylalanine(att.toString());
    } else {
      SetAmountOfPhenylalanine('')
    }
  }
  function handleAmountOfPhenylalanine(value){
    SetAmountOfPhenylalanine(value);
  }

  function handleValue(value) {
    console.log(value)
  }
  
  return (
    <View style={{flex:1, backgroundColor:"#CDDCFE" }}>
        <View>
          <AppText>
            {UserName}
          </AppText>
        </View>

        <AppSeparator/>

      <ScrollView>
        <View>
          <AppText>
            Cadastro de produto
          </AppText>
        </View>

        <AppBarScanner handleValue={(valorBARCODE) => handleValue(valorBARCODE)}/>

        <View style={{marginRight:"10%", marginLeft:"10%"}}>
          <View>
            <AppText>
              Nome do produto
            </AppText>
            <AppInput value={ProductsName} onChangeText={handleProductName}/>
          </View>

          <View>
            <AppText>
              Fabricante do produto
            </AppText>
            <AppInput value={ManufacturerName} onChangeText={handleManufacturerName} />
          </View>

          <View>
            <AppText>
              Unidade do produto
            </AppText>
            <AppInput placeholder='Gramas(g)' value={AmountOfProduct} onChangeText={handleAmountOfProduct} keyboardType='numeric' />
          </View>

          <View>
            <AppText>
              Quantidade de Proteína por porção
            </AppText>
            <AppInput placeholder='Gramas(g)' keyboardType='numeric' value={AmountOfProtein} onChangeText={handleAmountOfProtein} />
          </View>

          <View>
            <AppText>
              Quantidade Total de Fenilalanina
            </AppText>
            <AppInput onFocus={()=>SetAmountOfPhenylalanine('')} keyboardType='numeric' value={AmountOfPhenylalanine} onChangeText={handleAmountOfPhenylalanine} />
          </View>

          <View style={{alignItems: 'center', marginTop:'10%'}}>
            <AppButton style={{width:'45%'}} onPress={RegisterSaveProduct}>
              <AppText>
                CADASTRAR
              </AppText>
            </AppButton>
          </View>
        </View>
      </ScrollView>

      <AppMainMenu/>
    </View>
  );
}
