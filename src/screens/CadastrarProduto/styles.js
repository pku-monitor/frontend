import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: lightblue;
`;

export const CenterAlign = styled.View`
    alignItems: center;
`;

export const Txt = styled.Text`
    fontSize: 25px;
`;

export const TxtTitle = styled.Text`
    textAlign:center;
    fontSize: 30px;
`;

//Substituir nos lugares que tem %
export const SpaceTitle = styled.Text`
    marginRight: 10vh;
    marginLeft: 10vh;
    marginTop: 5vh;
`;

export const Input = styled.TextInput`
  height: 40px;
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

export const Button = styled.TouchableOpacity`
  alignItems: center;
  justify-content: center; 
  margin-bottom: 10px;
  margin-top: 10px;
  width: 150px;
  backgroundColor: #84AAFD;
`;