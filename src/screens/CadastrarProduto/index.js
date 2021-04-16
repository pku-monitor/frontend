import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Input, Txt, Button, TxtButton } from '../Login/styles';

const CadastrarProduto = ({ navigation }) => {
  return (
    <Container>
      <Txt>Tela</Txt>
      <Txt>de</Txt>
      <Txt>Cadastro de produto</Txt>
      <Input
        placeholder="Nome do Produto">
      </Input>
      <Input
        placeholder="Fabricante do Produto">
      </Input>
      <Input
        placeholder="Unidade do Produto">
      </Input>
      <Input
        placeholder="Qauntidade de Proteína por porção">
      </Input>
      <Input
        placeholder="Quantidade Total de Fenilalanina">
      </Input>
      <Button onPress={() => navigation.navigate('Home')}>
        <TxtButton>CadastrarProduto Screen -{'>'} Home Screen</TxtButton>
      </Button>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>

  )

}

export default CadastrarProduto;