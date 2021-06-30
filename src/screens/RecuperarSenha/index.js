import React from 'react';
import { StatusBar} from 'react-native';
import { Container, Txt, Button, TxtButton, Input } from '../Login/styles';

const RecuperarSenha = ({ navigation }) => {
  
    return(
        <Container>
        <Txt>Recuperar Senha</Txt>
        <Input
        keyboardType = "email-address" placeholder = "Digite seu e-mail">
        </Input>
        <Input
        placeholder = "Digite sua senha">
        </Input>
        <Input
        placeholder = "Confirme sua senha">
        </Input>
        <Button onPress={() => navigation.navigate('Login')}>
          <TxtButton>Concluído</TxtButton>
        </Button>
        <StatusBar marginTop = {'auto'}></StatusBar>
        </Container>

    )

}

export default RecuperarSenha;