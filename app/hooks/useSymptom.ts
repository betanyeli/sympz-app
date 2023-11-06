/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Symptom {
    name: string
    date: Date
    description: string
    severity: number
}
const initialSymptoms: Symptom[] = [
    {
        name: 'Headache',
        date: new Date('2023-01-01'),
        description:
            'Intermittent headache throughout the day, felt mainly in the temples.',
        severity: 2,
    },
    {
        name: 'Muscle Soreness',
        date: new Date('2023-01-04'),
        description:
            'Muscle soreness in the arms and shoulders after a workout session.',
        severity: 3,
    },
    {
        name: 'Stomach Ache',
        date: new Date('2023-01-07'),
        description: 'Mild stomach discomfort likely due to indigestion.',
        severity: 1,
    },
    {
        name: 'Fever',
        date: new Date('2023-01-10'),
        description: 'Low-grade fever with occasional chills.',
        severity: 2,
    },
    {
        name: 'Nasal Congestion',
        date: new Date('2023-01-13'),
        description:
            'Nasal congestion and slight difficulty in breathing, possibly allergic in nature.',
        severity: 4,
    },
]

const useSymptoms = () => {
    const [symptoms, setSymptoms] = useState<Symptom[]>(initialSymptoms)
    const [error, setError] = useState<string | null>(null)

    const loadSymptoms = async () => {
        try {
            const storedSymptoms = await AsyncStorage.getItem('symptoms')
            if (storedSymptoms) {
                const parsedSymptoms = JSON.parse(storedSymptoms).map(
                    (s: any) => ({
                        ...s,
                        date: new Date(s.date),
                    }),
                )
                setSymptoms(parsedSymptoms)
            }
        } catch (err: unknown) {
            setError('Failed to load symptoms')
        }
    }
    useEffect(() => {
        loadSymptoms()
    }, [])

    useEffect(() => {
        const saveSymptoms = async () => {
            try {
                const stringifiedSymptoms = JSON.stringify(
                    symptoms.map(s => ({
                        ...s,
                        date: s.date.toISOString(),
                    })),
                )
                await AsyncStorage.setItem('symptoms', stringifiedSymptoms)
            } catch (err: unknown) {
                setError('Failed to save symptoms')
            }
        }

        saveSymptoms()
    }, [symptoms])
    const addSymptom = (newSymptom: Symptom) => {
        try {
            if (newSymptom) {
                setSymptoms([...symptoms, newSymptom])
            }
        } catch (err: unknown) {
            setError('Symptom name is required')
        }
    }

    return { symptoms, addSymptom, loadSymptoms, error }
}

export default useSymptoms
