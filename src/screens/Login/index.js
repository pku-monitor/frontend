import React, { useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/Login/actions';
import { Container, Button, Txt, TxtButton, Input } from './styles';

const Login = ({ navigation }) => {

  const dispatch = useDispatch();
  const { loading, personagens } = useSelector((state) => state.login)

  //console.log('Loading', loading)

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
  }

  return (
            <Container>
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
                <TxtButton>Login Screen -{'>'} RecuperarSenha Screen</TxtButton>
              </Button>
              <StatusBar marginTop = {'auto'}></StatusBar>
              {/*{personagens.map((personagem) => <TxtButton>{personagem.name}</TxtButton>)}*/}
            </Container>
        )
}

export default Login;