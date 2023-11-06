import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: '#FFF',
        borderRadius: 35,
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    tabBarButton: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F9FFD6',
    },
})

export default styles
