import { Animated, Button, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from 'react'
import colorPalette from "../../Resources/Colors";

interface DaysProps {
    textDay: string;
    isActive?: string;
}

const Days = (props: DaysProps) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(1)).current;
    
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    
    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
        
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleActive = () => setIsEnabled(previousState => {previousState ? fadeOut() : fadeIn() ; return !previousState;});
    
    const { container, alarmSides, textDays } = style;
    const ContainerbackgroundColor = isEnabled ? {backgroundColor: colorPalette.primary, } : {backgroundColor: colorPalette.background, opacity: 0.7};
    const { textDay } = props;

    return (
        <TouchableOpacity onPress={toggleActive}>
            <Animated.View style={[container, ContainerbackgroundColor ]}>
                <View style={alarmSides}>
                    <Text style={textDays} >{textDay}</Text>
                </View> 
            </Animated.View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: { width: 20, borderRadius: 20/2, height: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 3 },
    alarmSides: {flex: 1},
    rightSide: {width: '40%', alignItems: 'center', justifyContent: 'center'},
    leftSide: {width: '60%', alignItems: 'center', justifyContent: 'center'},
    leftTime: { color: 'white', fontSize: 20, fontWeight: '700'},
    textDays: { color: 'white', fontWeight: '500'}
})

export default Days;
