/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react'
import {
    Animated,
    Easing,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native'
import styles from './styles'

export type TextInputProps = {
    label: string
    onChangeText: (text: string) => void
} & Partial<RNTextInputProps>
function TextInput({
    label = 'New Title',
    onChangeText,
    ...props
}: TextInputProps) {
    const [text, setText] = useState('')
    const animatedValue = useRef(new Animated.Value(0))

    const handleTextChange = (newText: string) => {
        setText(newText)
        if (onChangeText) {
            onChangeText(newText)
        }
    }

    const returnAnimatedTitleStyles = {
        transform: [
            {
                translateY: animatedValue?.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: [22, -4],
                    extrapolate: 'clamp',
                }),
            },
        ],
        fontSize: animatedValue?.current.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14],
            extrapolate: 'clamp',
        }),
        color: animatedValue?.current.interpolate({
            inputRange: [0, 1],
            outputRange: ['#c2c2c2', '#444444'],
        }),
    }

    const viewStyles = {
        borderBottomColor: animatedValue?.current.interpolate({
            inputRange: [0, 1],
            outputRange: ['#c2c2c2', '#444444'],
        }),
        borderBottomWidth: 0.8,
    }

    const onFocus = () => {
        Animated.timing(animatedValue.current, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start()
    }

    const onBlur = () => {
        if (!text) {
            Animated.timing(animatedValue.current, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start()
        }
    }

    return (
        <Animated.View style={[styles.subContainer, viewStyles]}>
            <Animated.Text style={returnAnimatedTitleStyles}>
                {label}
            </Animated.Text>
            <RNTextInput
                {...props}
                onChangeText={handleTextChange}
                value={text}
                style={styles.textStyle}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </Animated.View>
    )
}

export default TextInput
