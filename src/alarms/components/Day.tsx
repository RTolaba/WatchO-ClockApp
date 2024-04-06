import { Animated, Button, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from 'react'
import colorPalette from "../../Resources/Colors";
import IDays from "../interfaces/IDays";

interface DaysProps {
    day: IDays;
}

const Days = (props: DaysProps) => {
    const { container, alarmSides, textDays } = style;
    const { char, isEnable: isEnableProp, name } = props.day;

    const [isEnabled, setIsEnabled] = useState(isEnableProp);
    const toggleActive = () => setIsEnabled(previousState => {return !previousState;});
    
    const ContainerbackgroundColor = isEnabled ? {backgroundColor: colorPalette.primary, } : {backgroundColor: colorPalette.background, opacity: 0.7};

    return (
        <TouchableOpacity onPress={toggleActive}>
            <Animated.View style={[container, ContainerbackgroundColor ]}>
                <View style={alarmSides}>
                    <Text style={textDays} >{char}</Text>
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
