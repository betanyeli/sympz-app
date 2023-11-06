import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Text } from '../../Themed'

type SeverityRatingProps = {
    maxSeverity?: number
    currentSeverity: number
    onSeverityChanged?: (severity: number) => void
}

function SeverityRating({
    maxSeverity = 5,
    currentSeverity,
    onSeverityChanged,
}: SeverityRatingProps) {
    const severityLabels = ['None', 'Mid', 'Moderate', 'Severe', 'Very Severe']
    const renderSeverityLevel = (index: number) => {
        let iconName = 'circle-o'
        let color = '#d3d3d3'

        if (currentSeverity >= index + 1) {
            iconName = 'circle'
            color = ['#81C784', '#AED581', '#FFF176', '#FFB74D', '#E57373'][
                index
            ]
        }

        const label = severityLabels[index]

        return (
            <TouchableOpacity
                key={index}
                style={styles.iconWrapper}
                onPress={() => onSeverityChanged?.(index + 1)}
            >
                <FontAwesome name={iconName as never} color={color} size={30} />
                <Text style={styles.labelText}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {Array.from({ length: maxSeverity }, (_, index) =>
                renderSeverityLevel(index),
            )}
        </View>
    )
}

export default SeverityRating
