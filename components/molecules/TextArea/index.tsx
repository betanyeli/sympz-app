/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import * as React from 'react'
import {
    View,
    TextInput,
    Text,
    TextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
    Animated,
    Easing,
} from 'react-native'

import styles, { charCounterStyle } from './styles'

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>

export interface IRNTextAreaProps extends TextInputProps {
    inputRef?: React.RefObject<TextInput> | null
    style?: CustomStyleProp
    textInputStyle?: CustomTextStyleProp
    maxCharTextStyle?: CustomTextStyleProp
    defaultCharCount?: number
    maxCharLimit?: number
    charCountColor?: string
    exceedCharCountColor?: string
    onChangeText: (text: string) => void
    label: string
}

const TextArea: React.FC<IRNTextAreaProps> = ({
    style,
    textInputStyle,
    inputRef,
    maxCharLimit = 200,
    defaultCharCount = 0,
    charCountColor = '#ccc',
    exceedCharCountColor = 'red',
    onChangeText,
    maxCharTextStyle,
    label,
}) => {
    const [charCount, setCharCount] = React.useState(defaultCharCount || 0)

    const handleChangeText = (text: string) => {
        setCharCount(text.length)
        if (onChangeText) {
            onChangeText(text)
        }
    }

    const animatedValue = React.useRef(new Animated.Value(0))
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
        if (!defaultCharCount) {
            Animated.timing(animatedValue.current, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start()
        }
    }
    const renderCharCount = () => {
        if (!maxCharLimit) {
            return null
        }

        return (
            <Text
                ref={inputRef}
                style={[
                    charCounterStyle(
                        charCount > maxCharLimit
                            ? exceedCharCountColor
                            : charCountColor,
                    ),
                    maxCharTextStyle,
                ]}
            >{`${charCount}/${maxCharLimit}`}</Text>
        )
    }

    return (
        <Animated.View style={[styles.subContainer, viewStyles]}>
            <Animated.Text style={[returnAnimatedTitleStyles]}>
                {label}
            </Animated.Text>
            <View style={[styles.container, style]}>
                <TextInput
                    multiline
                    style={[styles.textInputStyle, textInputStyle]}
                    onChangeText={handleChangeText}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
                {renderCharCount()}
            </View>
        </Animated.View>
    )
}

export default TextArea
