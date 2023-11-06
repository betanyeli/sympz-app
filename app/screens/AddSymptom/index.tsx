/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import DateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { Alert, Button, Platform, } from 'react-native'
import LottieView from 'lottie-react-native';
import { useNavigation } from 'expo-router';
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import TextInput from '../../../components/atoms/TextInput'
import TextArea from '../../../components/molecules/TextArea'
import SeverityRating from '../../../components/organisms/SeverityRating'
import useSymptoms from '../../hooks/useSymptom'
import HomeCard from '../../../components/atoms/HomeCard';

const lottieFailAnimation = require('../../animations/4.json')

export default function AddSymptom() {
    const navigation = useNavigation()
    const { addSymptom, error } = useSymptoms()
    const [severity, setSeverity] = useState(0)
    const [symptom, setSymptom] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState<Date>(new Date())
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date
        setShowDatePicker(Platform.OS === 'ios')
        setDate(currentDate)
    }

    const handleAddSymptom = () => {
        if (!symptom || !description || severity === 0) {
            Alert.alert('Invalid input!', 'All fields are required');
            return;
        }
        addSymptom({ name: symptom, description, severity, date: new Date() });
        setSymptom('')
        setDescription('')
        setSeverity(0)
        navigation.navigate("modal" as never)
    };

    if (error) <LottieView source={lottieFailAnimation} autoPlay
        loop />
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 8 }}>Symptom Name </Text>
            <TextInput
                label="Symptom name"
                value={symptom}
                onChangeText={setSymptom}
            />
            <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 8 }}>Severity </Text>
            <SeverityRating
                currentSeverity={severity}
                onSeverityChanged={setSeverity}
                maxSeverity={5}
            />
            <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 8 }}>Description </Text>
            <TextArea
                label="Description"
                onChangeText={setDescription}
                value={description}
            />

            <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 8 }}>Date</Text>
            <HomeCard customStyles={{ height: 48, }} onPress={() => setShowDatePicker(!showDatePicker)}>
                <Text
                    style={{
                        fontSize: 16,
                        lineHeight: 16,
                        color: '#D38F74',
                        fontWeight: 'bold',
                        borderRadius: 16
                    }}
                >
                    {
                        !showDatePicker
                            ? 'Select symptom date'
                            : 'Save selected date'
                    }
                </Text>
            </HomeCard>

            {showDatePicker && (
                <DateTimePicker
                    display="spinner"
                    value={date}
                    onChange={onChange}
                />
            )}
            <Text>Selected date: </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{`${date.toISOString().split('T')[0]}`}</Text>

            <Button title="Save" onPress={handleAddSymptom} />
        </View>
    )
}
