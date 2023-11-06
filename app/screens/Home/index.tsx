/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */

import { Image, useWindowDimensions } from 'react-native'
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import useSymptoms from '../../hooks/useSymptom'
import HomeCard from '../../../components/atoms/HomeCard'

const appLogo = require('../../../assets/images/sympz-logo.png')
const statisticsImage = require('../../../assets/images/statistics.png')

export default function Home() {
    const { width } = useWindowDimensions()
    const { symptoms } = useSymptoms()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, User</Text>
            <HomeCard onPress={() => console.log('Pressed')}>
                <Image
                    source={appLogo}
                    resizeMode="contain"
                    style={{ width: 100, marginRight: 8 }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        flex: 1,
                        color: '#D38F74',
                        textAlign: 'right',
                    }}
                >
                    {`Welcome to Sympz!\n Start to track symptoms below`}
                </Text>
            </HomeCard>
            <View style={{ flexDirection: 'row' }}>
                <HomeCard
                    onPress={() => console.log('Pressed')}
                    customStyles={{
                        width: width / 2 - 32,
                        backgroundColor: '#F9FFD6',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            flex: 1,
                            color: '#D38F74',
                        }}
                    >
                        Symptoms saved
                    </Text>
                    <Text
                        style={{
                            fontSize: 40,

                            color: '#D38F74',

                            textAlign: 'right',
                        }}
                    >
                        {symptoms.length || 0}
                    </Text>
                </HomeCard>
                <HomeCard
                    onPress={() => console.log('Pressed')}
                    customStyles={{
                        width: width / 2 - 32,
                        backgroundColor: '#F9FFD6',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            flex: 1,
                            color: '#D38F74',
                        }}
                    >
                        Symptoms updated
                    </Text>
                    <Text
                        style={{
                            fontSize: 40,
                            color: '#D38F74',

                            textAlign: 'right',
                        }}
                    >
                        4
                    </Text>
                </HomeCard>
            </View>
            <HomeCard onPress={() => console.log('Statistic Pressed')}>
                <Image
                    source={statisticsImage}
                    resizeMode="contain"
                    style={{ width: width / 2 - 20, height: 100 }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        flex: 1,
                        color: '#D38F74',
                        textAlign: 'right',
                        fontWeight: 'bold',
                    }}
                >
                    See Statistics
                </Text>
            </HomeCard>
            <HomeCard onPress={() => console.log('Statistic Pressed')}>
                <Text
                    style={{
                        fontSize: 20,
                        flex: 1,
                        color: '#D38F74',
                        textAlign: 'right',
                        fontWeight: 'bold',
                    }}
                >
                    Export data
                </Text>
            </HomeCard>
        </View>
    )
}
