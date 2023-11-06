import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    headerText: {
        fontSize: 16,
        lineHeight: 16,
        color: '#D38F74',
        fontWeight: 'bold',
        margin: 8,
    },
    item: {
        backgroundColor: '#FFFCEB',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
    date: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    severity: {
        fontSize: 14,
        fontWeight: '600',
    },
})

export default styles
