import React from 'react';
import { StatusBar} from 'react-native';
import { BGC, Container, Button, Txt, TxtButton, Input } from './styles';

const Login = ({ navigation }) => {

  return (
            <Container>
              <Txt>PKU</Txt>
              <Txt>Monitor</Txt>
              <Input keyboardType = "email-address" placeholder = "Digite seu e-mail"></Input>
              <Input placeholder = "Digite sua senha"></Input>
              <Button onPress={() => navigation.navigate('Home')}>
                <TxtButton>Login Screen -{'>'} Home Screen</TxtButton>
              </Button>
              <Button onPress={() => navigation.navigate('Registro')}>
                <TxtButton>Login Screen -{'>'} Registro Screen</TxtButton>
              </Button>
              <Button onPress={() => navigation.navigate('RecuperarSenha')}>
                <TxtButton>Login Screen -{'>'} RecuperarSenha Screen</TxtButton>
              </Button>
              <StatusBar marginTop = {'auto'}></StatusBar>
            </Container>
        )
}

export default Login;