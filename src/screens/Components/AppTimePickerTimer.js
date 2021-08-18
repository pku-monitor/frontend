import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { AppText } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AppTimePicker() {
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

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View>
            <TouchableOpacity style={{ shadowColor: 'black', shadowOpacity: 1, elevation: 8, shadowRadius: 15, height: 40, backgroundColor: '#84AAFD' }} onPress={showTimepicker}>
                <AppText>{date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}</AppText>
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