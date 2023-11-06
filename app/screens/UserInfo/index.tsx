/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, RefreshControl } from 'react-native'
import { useCallback, useState } from 'react'
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import useSymptoms from '../../hooks/useSymptom'

export default function UserInfo() {
    const { symptoms, loadSymptoms } = useSymptoms()
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        try {
            await loadSymptoms()
        } catch (err: unknown) {
            console.log('Error loading symptoms')
        }
        setRefreshing(false)
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={symptoms}
                keyExtractor={item => item.date.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListHeaderComponent={
                    <View>
                        <Text style={styles.headerText}>
                            Last symptoms recorded
                        </Text>
                    </View>
                }
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
