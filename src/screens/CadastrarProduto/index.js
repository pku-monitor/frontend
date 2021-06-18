import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Modal, Button } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import {useDispatch, useSelector} from 'react-redux';
import {SaveProductRequest} from '../../store/modules/Registro/actions.js'
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
    <View style={{flex:1, backgroundColor:"#CDDCFE" }}>
        <Modal transparent={true}
          visible={modalVisible} 
          animationType='fade' 
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={{backgroundColor:'black', flex:1, alignItems:'center', justifyContent:'space-around'}}>
            <View style={{width:'100%', height:'100%'}}>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />
              {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

            </View>
            <View style={{position:'absolute',right:'12%' ,bottom:'10%', width:'10%'}}>
              <TouchableOpacity style={{ height:80, width: 80, borderRadius: 64, backgroundColor:'#1E90FF'}} onPress={()=> setModalVisible(false)}>
                <AntDesign style={{left:'25%', top:'23%'}} name="close" size={40} color="#000000"/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>
            {UserName}
          </Text>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
      <ScrollView>

        <View>
          <Text style={{textAlign:"center", fontSize:30}}>
            Cadastro de produto
          </Text>
        </View>

        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <AntDesign name="barcode" size={75} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{marginRight:"10%", marginLeft:"10%"}}>
          <View style={{marginTop:"2%"}}>
            <Text style={{fontSize:20, textAlign:'center'}}>
              Nome do produto
            </Text>
            <TextInput value={ProductsName} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleProductName}/>
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20, textAlign:'center'}}>
              Fabricante do produto
            </Text>
            <TextInput value={ManufacturerName} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleManufacturerName} />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20, textAlign:'center'}}>
              Unidade do produto
            </Text>
            <TextInput placeholder='Gramas(g)' value={AmountOfProduct} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfProduct} keyboardType='numeric' />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20, textAlign:'center'}}>
              Quantidade de Proteína por porção
            </Text>
            <TextInput placeholder='Gramas(g)' keyboardType='numeric' value={AmountOfProtein} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfProtein} />
          </View>

          <View style={{marginTop:"5%"}}>
            <Text style={{fontSize:20, textAlign:'center'}}>
              Quantidade Total de Fenilalanina
            </Text>
            <TextInput onFocus={()=>SetAmountOfPhenylalanine('')} keyboardType='numeric' value={AmountOfPhenylalanine} style={{ borderWidth: 1, backgroundColor:"white" }} onChangeText={handleAmountOfPhenylalanine} />
          </View>

          <View style={{alignItems: 'center', marginTop:'12%'}}>
            <TouchableOpacity onPress={RegisterSaveProduct} style={{ alignItems:'center', width:'50%', backgroundColor: '#84AAFD'}}>
              <Text style={{fontSize:25}}>
                CADASTRAR
              </Text>
            </TouchableOpacity>
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