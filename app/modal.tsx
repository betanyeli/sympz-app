/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { StatusBar } from 'expo-status-bar'
import { Platform, TouchableOpacity } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'
import { useNavigation } from 'expo-router'
import { Text, View } from '../components/Themed'
import styles from './styles/modal/styles'

const lottieSuccessAnimation = require('./animations/5.json')

export default function ModalScreen() {
    const navigation = useNavigation() // Get navigation prop

    const handleClose = () => {
        navigation.goBack() // Navigate back to close the modal
    }
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
            <TouchableOpacity onPress={handleClose}>
                <Text
                    style={{
                        color: 'blue',
                        textDecorationLine: 'underline',
                        margin: 16,
                    }}
                >
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    )
}
