import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { Container, Inputs } from './styles';
import { Txt, Button, TxtButton, Input } from '../Login/styles.js';


const Home = ({ navigation }) => {
  return (
      <Container>
        <Txt>Tela da Home</Txt>
          <Inputs
            keyboardType="numeric"
            placeholder="Data atual">
          </Inputs>
          <Inputs
            keyboardType="numeric"
            placeholder="Hora atual">
          </Inputs>
        <Input
          placeholder="Nome do Produto"></Input>
        <Input
          placeholder="Quantidade do Produto a ser consumida"></Input>
        <Inputs
          keyboardType="numeric"
          placeholder="Peso atual">
        </Inputs>
        <Inputs
          keyboardType="numeric"
          placeholder="Total Fenilalanina"></Inputs>
          <Button onPress={() => navigation.navigate('Registro')}>
            <TxtButton>Home Screen -{'>'} Registro Screen</TxtButton>
          </Button>
        <Button onPress={() => navigation.navigate('CadastrarProduto')}>
          <TxtButton>Home Screen -{'>'} CadastrarProduto Screen</TxtButton>
        </Button>
        <Button onPress={() => navigation.navigate('Historico')}>
          <TxtButton>Home Screen -{'>'} Historico Screen</TxtButton>
        </Button>
        <Button onPress={() => navigation.navigate('InfoApp')}>
          <TxtButton>Home Screen -{'>'} InfoApp Screen</TxtButton>
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
          <TxtButton>Home Screen -{'>'} Login Screen (Sair)</TxtButton>
        </Button>
        <StatusBar marginTop={'auto'}></StatusBar>
      </Container>
  )
}

export default Home;