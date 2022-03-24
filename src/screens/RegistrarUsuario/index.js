import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import { LAppContainer,LAppInput,  LAppText, LAppSocialButtonFacebook, LAppViewInput} from './style';

export default function RegistrarUsuario({ navigation }) {
  return (
    <ScrollView>
        <LAppContainer>
            <View style={{marginHorizontal:25, marginTop:50, marginBottom:20}}>
                <LAppText  style={{textAlign: 'center'}}>
                    Para realizar o cadastro precisamos de algumas informacoes suas!
                </LAppText>
            </View>
            <View style={{marginHorizontal:20}}>
                <View>
                    <LAppText>
                        Nome:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>

                <View>
                    <LAppText>
                        Telefone:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>

                <View>
                    <LAppText>
                        Email:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>

                <View>
                    <LAppText>
                        CPF:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>

                <View>
                    <LAppText>
                        Senha:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>

                <View>
                    <LAppText secureTextEntry={true}>
                        Confirme a senha:
                    </LAppText>
                    <LAppViewInput>
                        <LAppInput/>
                    </LAppViewInput>
                </View>
            </View>
            <View style={{marginLeft:20, marginRight:20, flexDirection:'row', justifyContent:'space-between'}}>
            <LAppSocialButtonFacebook onPress={() => navigation.goBack(null)} style={{flexDirection:'row', backgroundColor: '#11134A'}}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <LAppText style={{color:'#FFFFFF',}}>
                    VOLTAR
                </LAppText>
            </LAppSocialButtonFacebook>
            <LAppSocialButtonFacebook style={{backgroundColor: '#A9DA6B'}} onPress={() => navigation.navigate('LoginSenha')}>
                <LAppText style={{color:'#FFFFFF',}}>
                    CONTINUAR...
                </LAppText>
            </LAppSocialButtonFacebook>
        </View>
        </LAppContainer>
    </ScrollView>
)}