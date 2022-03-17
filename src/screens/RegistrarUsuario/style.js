import styled from 'styled-components/native';

export const LAppContainer = styled.View`
  flex:1;
  background: #C8F5EE;
`;

export const LAppCabecalho = styled.View`
  height: 200px;
  left: 0px;
  top: 0px;

  background: #C8F5EE;
  borderBottomLeftRadius: 35px;
`;

export const LAppLogo = styled.View`
  width: 181px;
  height: 94px;
  top: 80px;
  alignSelf: center

  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 15px;
`;

export const LAppInput = styled.TextInput`
  height: 50px;
  margin-bottom:20px
  background: #FFFFFF;
  border-radius: 50px;
`;

export const LAppLoginButton = styled.TouchableOpacity`
  width: 300px;
  height: 45px;  

  margin-top:50px
  margin-bottom:20px

  display: flex;
  alignItems:center;
  align-items: center;
  text-align: center;
  justifyContent:center;
  alignSelf:center;

  background: #11134A;
  border-radius: 50px;
`;

export const LAppText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  display: flex;

  color: #000000;
`;

export const LAppTextSign = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  display: flex;

  text-decoration-line: underline;
  color: #0000ff;
`;

export const LAppForgetPasswordButton = styled.TouchableOpacity`
  height: 30px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  
  margin-right:30px

  display: flex;
  alignItems:center;
  align-items: center;
  text-align: center;
  justifyContent:center;
  alignSelf:flex-end;

  color: #FFFFFF;
`;

export const LAppLine1 = styled.View`
width: 92px;
height: 0px;
border: 1px solid #000000;
margin-right:20px
`;

export const LAppLine2 = styled.View`
  width: 92px;
  height: 0px;
  border: 1px solid #000000;
  margin-left:20px
`;

export const LAppSocialButtonGoogle = styled.TouchableOpacity`
  width: 144px;
  height: 45px;
  margin-top: 50px;
  background: #FFFFFF;
  border-radius: 25px;

  display: flex;
  alignItems:center;
  align-items: center;
  text-align: center;
  justifyContent:center;
  alignSelf:center;
`;

export const LAppSocialButtonFacebook = styled.TouchableOpacity`
  width: 144px;
  height: 45px;
  margin-top: 50px;

  background: #3C589E;
  border-radius: 25px;

  display: flex;
  alignItems:center;
  align-items: center;
  text-align: center;
  justifyContent:center;
  alignSelf:center;
`;

export const LAppSign = styled.TouchableOpacity`
  align-items: center;
  text-align: center;
  justifyContent:center;

  color: #999999;
`;



//FORGET PASSWORD MODAL
export const LAppForgetModalContainer = styled.View`
  width: 380px;
  height: 233px;

  top: 250px;
  alignSelf: center;
  justifyContent: center;
  background: #F0F2F6;
  border-radius: 20px;
`;

export const LAppForgetModalView = styled.View` 
margin: 20px;
backgroundColor: #F0F2F6;
border-radius: 20px;
padding: 35px;
`;

export const LAppForgetModalCloseButton = styled.TouchableOpacity`
position: absolute;
width: 31px;
height: 31px;
right: 0px;
top: 0px;
border-radius: 50px;
background: #11134A;;
`;

export const LAppForgetModalText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  alignItems: center;
  textAlign: center;
  justifyContent:center;
  alignSelf:center;

  color: #F0F2F6;
`;

export const LAppForgetModalOk = styled.TouchableOpacity`
  width: 258px;
  height: 40px;

  background: #A9DA6B;
  border-radius: 50px;
`;