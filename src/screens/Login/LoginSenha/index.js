import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import { LAppContainer, LAppCabecalho, LAppLogo, LAppInput, 
  LAppLoginButton, LAppForgetPasswordButton, LAppLine1, LAppLine2,
  LAppText, LAppSocialButtonGoogle, LAppSocialButtonFacebook, LAppSign, LAppTextSign,
  LAppForgetModalContainer, LAppForgetModalView, LAppForgetModalCloseButton,
  LAppForgetModalText, LAppForgetModalOk} from '../styles';

  export default function LoginName({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);
  return (
    <LAppContainer>
        <View style={{margin:50,}}>
            <LAppText  style={{textAlign: 'center',}}>
                Agora vamos criar uma 
                <LAppText style={{textAlign: 'center', fontWeight: 'bold'}}>
                {' '} senha
                </LAppText>
                , necessario que tenha no minimo 6 caracteres
            </LAppText>
        </View>
        <View style={{marginTop:"40%"}}>
            <LAppInput>
            </LAppInput>
        </View>
        <View style={{marginLeft:20, marginRight:20, flexDirection:'row', justifyContent:'space-between'}}>
            <LAppSocialButtonFacebook style={{flexDirection:'row', backgroundColor: '#11134A'}}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <LAppText style={{color:'#FFFFFF',}}>
                    VOLTAR
                </LAppText>
            </LAppSocialButtonFacebook>
            <LAppSocialButtonFacebook style={{backgroundColor: '#A9DA6B'}}>
                <LAppText style={{color:'#FFFFFF',}}>
                    CONTINUAR...
                </LAppText>
            </LAppSocialButtonFacebook>
        </View>
    </LAppContainer>
)}