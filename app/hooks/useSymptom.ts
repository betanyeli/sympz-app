/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Symptom {
    name: string
    date: Date
    description: string
    severity: number
}
const useSymptoms = () => {
    const [symptoms, setSymptoms] = useState<Symptom[]>([])
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const loadSymptoms = async () => {
            try {
                const storedSymptoms = await AsyncStorage.getItem('symptoms')
                if (storedSymptoms) setSymptoms(JSON.parse(storedSymptoms))
            } catch (err: unknown) {
                setError('Failed to load symptoms')
            }
        }

        loadSymptoms()
    }, [])

    const addSymptom = (newSymptom: Symptom) => {
        try {
            if (newSymptom) {
                setSymptoms([...symptoms, newSymptom])
            }
        } catch (err: unknown) {
            setError('Symptom name is required')
        }
    }

    return { symptoms, addSymptom, error }
}

export default useSymptoms
