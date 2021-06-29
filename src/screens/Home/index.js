import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {DataConsumptionRequest} from '../../store/modules/Home/actions.js'
import mainMenu, { Container, Separator, Title, Input } from './styles.js';

export default function Home({ navigation }) {
  const [UserName, SetUserName] = useState('Nome Do Usuario');
  const [nameOfProduct, setNameOfProduct] = useState("");
  const [amountOfProduct, setAmountOfProduct] = useState("");
  const [phenylalanineConsumed, setPhenylalanineConsumed] = useState("");
  const [phenylalanineOfTheDay, setPhenylalanineOfTheDay] = useState(0);
  const [date, setDate] = useState(new Date().getTime()-(14400000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([
    {date:'10/05', productsName:"exemplo", TotalPhenylalanine:"500"},
    {date:'2', productsName:"exemplo", TotalPhenylalanine:"100"},
    {date:'3', productsName:"macarrao", TotalPhenylalanine:"500"},
    {date:'4', productsName:"macarrao", TotalPhenylalanine:"500"},
  ]);
  
  const dispatch= useDispatch();
  const { loading } = useSelector((state) => state.login);



  const changeBarPercent = (percentValue=42) => {
    return {
      height: 18,
      width: String(percentValue)+'%',
      backgroundColor: "gray",
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  function handleNameOfProduct(value){
    setNameOfProduct(value);
  }

  function handleAmountOfProduct(value){
    setAmountOfProduct(value);
  }


  function homeSendConsumption(){
    console.log("entrou na homesendconsumption")
    dispatch(DataConsumptionRequest(nameOfProduct, amountOfProduct, phenylalanineConsumed, date));
    console.log("loading",loading)
  }

  return (
    <Container>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>
            {UserName}
          </Text>
        </View>

        <Separator/>
      <ScrollView style={{marginBottom:50}}>

        <View style={{ marginLeft: '10%', marginRight: '10%' }}>
          <Title>
            Consumo diário de fenilalanina
          </Title>
          <View style={{ backgroundColor: "black", height: 18 }}>
            <View style={changeBarPercent()}/>
          </View>
        </View>
        
        <View style={{ marginLeft: '10%', marginRight: '10%'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column'}}>
              <Title>
                Data do consumo
              </Title>
              <View>
                <TouchableOpacity style={{ height:40, backgroundColor: '#84AAFD'}} onPress={showDatepicker}>
                  <Ionicons name="calendar-outline" size={40} color="black" style={{textAlign:"center"}}></Ionicons>
                </TouchableOpacity>
                {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  />)}
              </View>
            </View>
            <View>
              <Title>
                Hora do consumo
              </Title>
              <View>
                <TouchableOpacity style={{ height:40, backgroundColor: '#84AAFD' }} onPress={showTimepicker}>
                  <Ionicons name="time-outline" size={40} color="black" style={{textAlign:"center"}}></Ionicons>
                </TouchableOpacity>
                {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  />)}
              </View>
            </View>
          </View>

          <Title>
            Nome do Produto
          </Title>
          <Input value={nameOfProduct} placeholder="Nome do produto" onChangeText={handleNameOfProduct} />
          <Title>
            Quantidade consumida
          </Title>
          <Input value={amountOfProduct}  keyboardType='numeric' placeholder="Quantidade(gramas)" onChangeText={handleAmountOfProduct}/>
          <Title>
            Fenilalanina consumida
          </Title>
          <Title>
            {phenylalanineOfTheDay}
          </Title>
          <View style={{alignItems: 'center', marginTop:'5%'}}>
            <TouchableOpacity onPress={homeSendConsumption} style={{ alignItems:'center', width:'50%', backgroundColor: '#84AAFD'}}>
              <Text style={{fontSize:25}}>
                CONFIRMAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <Separator/>
        <View>
          <Title>CONSUMIDOS HOJE</Title>
            {products.map((dados)=><View style={styles.ViewOfList}><Text style={{fontSize:30 }}>{dados.productsName} {dados.TotalPhenylalanine}</Text></View>)}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <View style={{ marginLeft: '5%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
          <TouchableOpacity style={{ borderRadius: 30 }}>
            <View><Entypo name="home" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Historico')}>
            <View><AntDesign name="solution1" size={40} color={"black"} /></View>
          </TouchableOpacity >
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('CadastrarProduto')}>
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
    width:'100%',
  },
  ViewOfList:{
    backgroundColor:'#839192',
     alignItems:"center",
     marginTop:'2%',
     marginLeft:'10%',
      marginRight:'10%',
  }
});
