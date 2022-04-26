import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';

import RegistroScreen from './screens/Registro';
import RecuperarSenhaScreen from './screens/RecuperarSenha';

import RegistrarUsuario from './screens/RegistrarUsuario';
import RegistrarNomeScreen from './screens/RegistrarUsuario/RegistrarNome';
import RegistrarSenhaScreen from './screens/RegistrarUsuario/RegistrarSenha';

import HomeScreen from './screens/Home';
import CadastrarProdutoScreen from './screens/CadastrarProduto';
import HistoricoScreen from './screens/Historico';
import InfoAppScreen from './screens/InfoApp';

//Esta parte funciona como uma pilha

const Stack = createStackNavigator();

function RootNavigation() {
  return (
      <Stack.Navigator headerMode = "none"> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegistrarSenha" component={RegistrarSenhaScreen} />
        <Stack.Screen name="RegistrarNome" component={RegistrarNomeScreen} />
        <Stack.Screen name="RegistrarUsuario" component={RegistrarUsuario} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="CadastrarProduto" component={CadastrarProdutoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="InfoApp" component={InfoAppScreen} />
      </Stack.Navigator>
  );
}

export default RootNavigation;