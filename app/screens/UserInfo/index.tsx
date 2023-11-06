import { FlatList } from 'react-native'
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import useSymptoms from '../../hooks/useSymptom'

export default function UserInfo() {
    const { symptoms } = useSymptoms()
    return (
        <View style={styles.container}>
            <FlatList
                data={symptoms}
                keyExtractor={item => item.date.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <Text style={styles.date}>
                            {item.date.toDateString()}
                        </Text>
                        <Text style={styles.severity}>
                            Severity: {item.severity}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}
