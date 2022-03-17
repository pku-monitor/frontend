import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function AppMainMenu() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.containerInter}>
            <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Home')}>
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
    );
}


const styles = StyleSheet.create({
    container: {
      height: '8%',
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      width: '100%',
    },
    containerInter:{
        flex:1,
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '5%',
    },
  });