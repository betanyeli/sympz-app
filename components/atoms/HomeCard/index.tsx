import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import styles from './styles'

type homeCardProps = {
    children: JSX.Element[] | JSX.Element
    customStyles?: StyleProp<ViewStyle>
    onPress: () => void
}
function HomeCard({ children, customStyles, onPress }: homeCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, customStyles]}
        >
            {children}
        </TouchableOpacity>
    )
}
export default HomeCard
