/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'
import { Text, View } from '../components/Themed'
import styles from './styles/modal/styles'

const lottieSuccessAnimation = require('./animations/5.json')

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <AnimatedLottieView
                source={lottieSuccessAnimation}
                autoPlay
                style={{ width: 100 }}
            />
            <Text style={styles.title}> Symtom successfully saved</Text>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}
