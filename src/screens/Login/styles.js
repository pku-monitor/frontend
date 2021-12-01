import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #CDDCFE;
    align-items: center; 
    justify-content: center; 
`;

/*
export const Button = styled.TouchableOpacity`
    background-color: grey;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center; 
    justify-content: center; 
`;
*/

export const Button = styled.TouchableOpacity`
  alignItems: center;
  justify-content: center; 
  margin-bottom: 10px;
  margin-top: 10px;
  width: 150px;
  backgroundColor: #84AAFD;
`;

export const Txt = styled.Text`
    font-size: 30px;
    font-family: 'monospace';
    font-weight: bold;
`;

export const TxtButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  justify-content: center;    
  align-items: center; 
`;

export const Input = styled.TextInput`
  height: 45px;
  width: 320px;
  background-color: #FFF;
  border-radius: 5px;
  border-color: #EEE;
  border-width: 1px;
  padding-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  align-items: center;
  justify-content: center; 
`;

