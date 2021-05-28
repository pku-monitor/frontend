import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: lightblue;
    padding-top: 15px; /*na web 150px*/
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Inputs = styled.TextInput`
    height: 45px;
    width: 130px;
    background-color: #FFF;
    border-radius: 5px;
    border-color: #EEE;
    border-width: 1;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center; 
`;
