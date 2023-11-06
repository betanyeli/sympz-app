import { TextStyle, StyleSheet } from 'react-native'

export const charCounterStyle = (charCountColor: string): TextStyle => ({
    bottom: 8,
    right: 16,
    fontSize: 14,
    position: 'absolute',
    color: charCountColor,
})

export default StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#fff',
    },
    textInputStyle: {
        margin: 16,
        height: '90%',
        backgroundColor: 'transparent',
        color: '#131313',
    },
    subContainer: {
        paddingTop: 16,
        marginHorizontal: 24,
    },
    textStyle: {
        paddingBottom: 8,
        fontSize: 16,
    },
})
