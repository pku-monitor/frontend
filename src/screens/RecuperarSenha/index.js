import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import { LAppContainer, LAppCabecalho, LAppLogo, LAppInput, 
    LAppLoginButton, LAppForgetPasswordButton, LAppLine1, LAppLine2,
    LAppText, LAppSocialButtonGoogle, LAppSocialButtonFacebook, LAppSign, LAppTextSign,
    LAppForgetModalContainer, LAppForgetModalView, LAppForgetModalCloseButton,
    LAppForgetModalText, LAppForgetModalOk} from './styles';

export default function RecuperarSenha({ navigation }) {
  return (
    <ScrollView>
      <View>
        <LAppText>
          Recuperar Senha
        </LAppText>
      </View>
        <LAppContainer>
              
            <LAppInput/>
            <LAppInput/>
        </LAppContainer>
    </ScrollView>
)}