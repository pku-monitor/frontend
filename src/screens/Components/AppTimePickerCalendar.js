import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { AppButton, AppText } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AppTimePicker(props) {
    const [mode, setMode] = useState('date');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const settingValue = () => {
        props.value=date.getDate() < 10 ? "0" + date.getDate() : date.getDate()+"/"+(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)+"/"+date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear();
    };


    return (
        <View>
            <TouchableOpacity onclick={()=>settingValue} style={{ shadowColor: 'black', shadowOpacity: 1, elevation: 8, shadowRadius: 15, height: 40, backgroundColor: '#84AAFD' }} onPress={showDatepicker}>
                <AppText>{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/{(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}/{date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear()}</AppText>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />)}
        </View>
    )
}