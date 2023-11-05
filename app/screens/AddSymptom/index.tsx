import React from 'react'
import { TextInput, useWindowDimensions } from 'react-native'
import { Text, View } from '../../../components/Themed'
import styles from './styles'

export default function AddSymptom() {
    const { width } = useWindowDimensions()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add symptom</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <TextInput
                style={{
                    borderBottomWidth: 1,
                    width: width - 32,
                    borderRadius: 6,
                    height: 48,
                    padding: 8,
                    fontFamily: 'Poppins',
                    borderBottomColor: 'pink',
                }}
            />
        </View>
    )
}
