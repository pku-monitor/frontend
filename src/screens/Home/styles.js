import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: lightblue;
`;

export const menuContainer=styled.View`
    bottom: 0px;
    height: 8vh;
    zIndex: 9;
    position: absolute;
    color: white;
    borderColor: gray;
    borderWidth: 1px;
    borderTopLeftRadius: 40;
    borderTopRightRadius: 40;
    width: 100;
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

export const Title=styled.Text`
    fontSize: 20;
    textAlign: center;
`;

export const Separator=styled.View`
  borderWidth: 0.7px;
  borderColor: black;
`;

/*export const DiariesProducts=styled.View`
  color:#CDDCFE;
  alignItems:center;
  marginTop: 20px;
  marginLeft: 10px;
  marginRight: 10px;
`;*/

/*export default function(){
    return(
    <View style={{ marginLeft:'5%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
        <TouchableOpacity style={{ borderRadius: 30 }}>
            <View><Entypo name="home" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Historico')}>
            <View><AntDesign name="solution1" size={40} color={"black"} /></View>
          </TouchableOpacity >
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('CadastrarProduto')}>
            <View><Ionicons name="add" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('InfoApp')}>
            <View><Ionicons name="alert" size={40} color={"black"} /></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 30 }} onPress={() => navigation.navigate('Login')}>
            <View><Ionicons name="log-in-outline" size={40} color={"black"} /></View>
          </TouchableOpacity>
    </View>
    );
}*/