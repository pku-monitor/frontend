import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator } from 'react-native';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/Login/actions';

//STYLE
import { LAppContainer, LAppCabecalho, LAppLogo, LAppInput, 
  LAppLoginButton, LAppForgetPasswordButton, LAppLine1, LAppLine2,
  LAppText, LAppSocialButtonGoogle, LAppSocialButtonFacebook, LAppSign, LAppTextSign,
  LAppForgetModalContainer, LAppForgetModalView, LAppForgetModalCloseButton,
  LAppForgetModalText, LAppForgetModalOk} from './styles';

const Login = ({ navigation }) => {
/*
  const dispatch = useDispatch();
  const { loading, personagens } = useSelector((state) => state.login)

  //console.log('Loading', loading)
  console.log('PERSONAGENS', personagens)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(value){
    setUsername(value)
  }

  function  handlePassword(value) {
    setPassword(value)
  }

  function handleSignIn() {
    dispatch(signInRequest(username, password))
  }*/

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);
  return (
    <LAppContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <LAppForgetModalContainer>
          <LAppForgetModalView>
            <LAppForgetModalCloseButton onPress={() => {setModalVisible(!modalVisible)}}>
              <LAppForgetModalText style={{marginTop:2}}>
                X
              </LAppForgetModalText>
            </LAppForgetModalCloseButton>

            <LAppForgetModalText style={{color:"#000000"}}>
              Qual seu email?
            </LAppForgetModalText>

            <LAppInput/>

            <LAppForgetModalOk onPress={()=>{setModalVisible(!modalVisible);setmodalVisibleConfirm(true)}}>
              <LAppForgetModalText style={{marginTop:6}}>
                OK
              </LAppForgetModalText>
            </LAppForgetModalOk>

          </LAppForgetModalView>
        </LAppForgetModalContainer>
      </Modal>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleConfirm}
        onRequestClose={() => {
          setModalVisible(!modalVisibleConfirm);
        }}
      >
        <LAppForgetModalContainer>
          <LAppForgetModalView>
            <LAppForgetModalCloseButton onPress={() => {setmodalVisibleConfirm(!modalVisibleConfirm)}}>
              <LAppForgetModalText style={{marginTop:2}}>
                X
              </LAppForgetModalText>
            </LAppForgetModalCloseButton>

            <LAppForgetModalText style={{color:"#000000"}}>
              Digite o código que enviamos ao seu email:
            </LAppForgetModalText>

            <LAppInput/>

            <LAppForgetModalOk>
              <LAppForgetModalText style={{marginTop:6}}>
                OK
              </LAppForgetModalText>
            </LAppForgetModalOk>

          </LAppForgetModalView>
        </LAppForgetModalContainer>
      </Modal>

      <LAppCabecalho>
        <LAppLogo/>
      </LAppCabecalho>
      <View>
        <View style={{marginBottom:0, marginLeft:20, marginRight:20, marginTop: 20}}>
          <LAppText style={{marginBottom:5}}>
            Email:
          </LAppText>
          <LAppInput/>
          <LAppText style={{marginBottom:5}}>
            Senha:
          </LAppText>
          <LAppInput/>
        </View>

        <LAppForgetPasswordButton>
          <LAppTextSign onPress={() => setModalVisible(true)}>
            Esqueci minha senha
          </LAppTextSign>
        </LAppForgetPasswordButton>


        <LAppLoginButton onPress={() => navigation.navigate('LoginNome')}>
          <LAppText style={{color:'#FFFFFF',}}>
            ENTRAR
          </LAppText>
        </LAppLoginButton>

        <View style={{alignSelf:"center", flexDirection:'row', alignItems:"center", alignContent:"space-between"}}>
          <LAppLine1/>
          <LAppText> entrar com</LAppText>
          <LAppLine2/>
        </View>

        <View style={{marginLeft:20, marginRight:20, flexDirection:'row', justifyContent:'space-between'}}>
          <LAppSocialButtonGoogle>
            <LAppText>
              Google
            </LAppText>
          </LAppSocialButtonGoogle>

          <LAppSocialButtonFacebook>
            <LAppText style={{color:'#FFFFFF',}}>
              Facebook
            </LAppText>
          </LAppSocialButtonFacebook>
        </View>

        <View style={{marginTop:25,flexDirection:'row', alignSelf:"center", alignContent:"space-between"}}>
          <LAppText>
            Não tem uma conta?
          </LAppText>
          <LAppSign>
            <LAppTextSign onPress={() => navigation.navigate('RegistrarUsuario')}>
              Cadastre-se
            </LAppTextSign>
          </LAppSign>
          
        </View>
      </View>
    </LAppContainer>
  )
}
{/*<Container>
              <Txt>PKU</Txt>
              <Txt>Monitor</Txt>
              <Input value = {username} onChangeText = {handleUsername} keyboardType = "email-address" placeholder = "Digite seu e-mail"></Input>
              <Input value = {password} onChangeText = {handlePassword} placeholder = "Digite sua senha"></Input>
              {loading && <ActivityIndicator size = "large" color = "red" />}
              
              <Button onPress={handleSignIn}>
                <TxtButton>Entrar</TxtButton>
              </Button>
              <Button onPress={() => navigation.navigate('CadastrarProduto')}>
                <TxtButton>Login Screen -{'>'} Registro Screen</TxtButton>
              </Button>
              <Button onPress={() => navigation.navigate('RecuperarSenha')}>
                <TxtButton>Recuperar Senha</TxtButton>
              </Button>
              <StatusBar marginTop = {'auto'}></StatusBar>
              {personagens.map((personagem) => <TxtButton>{personagem.name}</TxtButton>)}
                </Container>*/}
export default Login;