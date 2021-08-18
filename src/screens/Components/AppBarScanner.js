import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function AppBarScanner({value}) {
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={()=>setModalVisible(true)}>
        <AntDesign name="barcode" size={75} color="black" />
      </TouchableOpacity>
      <Modal transparent={true}
        visible={modalVisible}
        animationType='fade'
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{ width: '100%', height: '100%' }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

          </View>
          <View style={{ position: 'absolute', right: '12%', bottom: '10%', width: '10%' }}>
            <TouchableOpacity style={{ height: 80, width: 80, borderRadius: 64, backgroundColor: '#1E90FF' }} onPress={() => setModalVisible(false)}>
              <AntDesign style={{ left: '25%', top: '23%' }} name="close" size={40} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}