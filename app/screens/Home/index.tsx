/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */

import { Animated, Image, ScrollView, useWindowDimensions } from 'react-native'
import { useEffect, useRef } from 'react'
import { useNavigation } from 'expo-router'
import { Text, View } from '../../../components/Themed'
import styles from './styles'
import useSymptoms from '../../hooks/useSymptom'
import HomeCard from '../../../components/atoms/HomeCard'

const appLogo = require('../../../assets/images/sympz-logo.png')
const statisticsImage = require('../../../assets/images/statistics.png')

export default function Home() {
    const { width } = useWindowDimensions()
    const cardWidth = { width: width / 2 - 32 }
    const { symptoms } = useSymptoms()
    const navigation = useNavigation()

    const fadeIn = useRef(new Animated.Value(0)).current
    const slideIn = useRef(new Animated.Value(width)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeIn, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.spring(slideIn, {
                toValue: 0,
                useNativeDriver: true,
            }),
        ]).start()
    }, [fadeIn, slideIn, width])

    return (
        <ScrollView style={styles.container}>
            <Animated.View style={{ opacity: fadeIn }}>
                <Text style={styles.title}>Welcome, User</Text>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: slideIn }] }}>
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
                        onPress={() =>
                            navigation.navigate('user-info' as never)
                        }
                        customStyles={[styles.homeCard, cardWidth]}
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
                        onPress={() =>
                            navigation.navigate('user-info' as never)
                        }
                        customStyles={[styles.homeCard, cardWidth]}
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
                    <Text style={styles.secondaryHomeCard}>See Statistics</Text>
                </HomeCard>
                <HomeCard onPress={() => console.log('Export data Pressed')}>
                    <Text style={styles.secondaryHomeCard}>Export data</Text>
                </HomeCard>
            </Animated.View>
        </ScrollView>
    )
}
