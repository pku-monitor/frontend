import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import {useDispatch, useSelector} from 'react-redux';
import {SaveProductRequest} from '../../store/modules/Registro/actions.js'

export default function CadastrarProduto({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');
  const [ProductsName, SetproductsName] = useState('');
  const [ManufacturerName, SetManufacturerName] = useState('');
  const [AmountOfProduct, SetAmountOfProduct] = useState('');
  const [AmountOfProtein, SetAmountOfProtein] = useState('');
  const [AmountOfPhenylalanine, SetAmountOfPhenylalanine] = useState('');

  const dispatch= useDispatch();
  const { loading } = useSelector((state) => state.login);

  function RegisterSaveProduct(){
    dispatch(SaveProductRequest(ProductsName, ManufacturerName, AmountOfProduct, AmountOfProtein, AmountOfPhenylalanine));
  }

  function handleProductName(value){
    SetproductsName(value)
  }

  function handleManufacturerName(value){
    SetManufacturerName(value)
  }

  function handleAmountOfProduct(value){
    SetAmountOfProduct(value)
  }

  function handleAmountOfProtein(value){
    SetAmountOfProtein(value)
  }

  function handleAmountOfPhenylalanine(value){
    SetAmountOfPhenylalanine(value)
  }

  return (
    <View style={{flex:1, backgroundColor:"#CDDCFE" }}>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>
            {UserName}
          </Text>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />

        <View>
          <Text style={{textAlign:"center", fontSize:30}}>
            Cadastro de produto
          </Text>
        </View>

        <View style={{marginRight:"10%", marginLeft:"10%", marginTop:"5%"}}>
          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20}}>
              Nome do produto
            </Text>
            <TextInput value= {ProductsName} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleProductName}/>
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20}}>
              Fabricante do produto
            </Text>
            <TextInput value={ManufacturerName} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleManufacturerName} />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20}}>
              Unidade do produto
            </Text>
            <TextInput value={AmountOfProduct} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfProduct} />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20}}>
              Quantidade de Proteína por porção
            </Text>
            <TextInput value={AmountOfProtein} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfProtein} />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20}}>
              Quantidade Total de Fenilalanina
            </Text>
            <TextInput value={AmountOfPhenylalanine} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfPhenylalanine} />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop:'12%'}}>
            <TouchableOpacity onPress={RegisterSaveProduct} style={{ alignItems:'center', width:'50%', backgroundColor: '#84AAFD'}}>
              <Text style={{fontSize:25}}>
                CADASTRAR
              </Text>
            </TouchableOpacity>
          </View>
      </View>

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
    </View>
  );
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