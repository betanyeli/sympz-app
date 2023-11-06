/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import DateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { Button, Platform } from 'react-native'
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import TextInput from '../../../components/atoms/TextInput'
import TextArea from '../../../components/molecules/TextArea'
import SeverityRating from '../../../components/organisms/SeverityRating'

export default function AddSymptom() {
    const [severity, setSeverity] = useState(0)
    const [symptom, setSymptom] = useState('')
    const [date, setDate] = useState<Date>(new Date())
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date
        setShowDatePicker(Platform.OS === 'ios')
        setDate(currentDate)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>How do you feel today?</Text>

            <Button
                title={
                    !showDatePicker
                        ? 'Select a date'
                        : 'Hide selector'
                }
                onPress={() => setShowDatePicker(!showDatePicker)}
            />
            {showDatePicker && (
                <DateTimePicker
                    display="spinner"
                    value={date}
                    onChange={onChange}
                />
            )}
            <Text>{date.toISOString().split('T')[0]}</Text>

            <TextInput
                label="Symptom name"
                value={symptom}
                onChangeText={setSymptom}
            />

            <SeverityRating
                currentSeverity={severity}
                onSeverityChanged={setSeverity}
                maxSeverity={5}
            />

            <TextArea
                label="Description"
                onChangeText={(t: string) => console.log(t)}
            />
        </View>
    )
}
