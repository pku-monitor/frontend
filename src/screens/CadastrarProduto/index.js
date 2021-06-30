import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Modal, Button } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import {useDispatch, useSelector} from 'react-redux';
import {SaveProductRequest} from '../../store/modules/Registro/actions.js'
import { CenterAlign, Container, Txt, TxtTitle, Input, Button } from './styles.js';
import { BarCodeScanner } from 'expo-barcode-scanner';



export default function CadastrarProduto({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);//controlador modal
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
  //code bar code:
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  return (
    <Container>
      <View>
        <CenterAlign>
          <Txt>
            {UserName}
          </Txt>
        </CenterAlign>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
      <ScrollView>
        <View>
          <TxtTitle>
            Cadastro de produto
          </TxtTitle>
        </View>
{/* Arrumar isso, pois está em % */}
        <View style={{marginRight:"10%", marginLeft:"10%", marginTop:"5%"}}>
          <View style={{marginTop:"5%"}}>
            <Txt>
              Nome do produto
            </Txt>
            <Input value= {ProductsName} onChangeText={handleProductName}/>
          </View>
          <View>
            <Txt>
              Fabricante do produto
            </Txt>
            <Input value={ManufacturerName} onChangeText={handleManufacturerName} />
          </View>
          <View>
            <Txt>
              Unidade do produto
            </Txt>
            <Input value={AmountOfProduct} onChangeText={handleAmountOfProduct} />
          </View>
          <View>
            <Txt>
              Quantidade de Proteína por porção
            </Txt>
            <Input value={AmountOfProtein} onChangeText={handleAmountOfProtein} />
          </View>
          <View>
            <Txt>
              Quantidade Total de Fenilalanina
            </Txt>
            <Input value={AmountOfPhenylalanine} onChangeText={handleAmountOfPhenylalanine} />
          </View>
        <View style={{alignItems: 'center', marginTop:'10%'}}>
            <Button onPress={RegisterSaveProduct}>
              <Txt>
                CADASTRAR
              </Txt>
            </Button>
          </View>
        </View>
      </ScrollView>
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