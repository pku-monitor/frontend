import React, { useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/Login/actions';
import { LAppContainer, LAppSubmit, LAppInput } from './styles';

export default function Login({ navigation }){

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
    <View>
      <LAppContainer>
        <LAppInput/>
        <LAppSubmit/>
      </LAppContainer>
    </View>
  )
}