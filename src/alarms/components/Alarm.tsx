import { Animated, Button, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef, useState } from 'react'
import colorPalette from "../../Resources/Colors";
import Days from "./Day";
import IAlarm from "../interfaces/IAlarm";
import IDays from "../interfaces/IDays";

interface AlarmProps {
    alarm: IAlarm;
}

const DaysOfTheWeek: IDays[] = [
    {
        char: 'L',
        isEnable: true,
        name: 'Lunes',
    },
    {
        char: 'M',
        isEnable: true,
        name: 'Martes',
    },
    {
        char: 'X',
        isEnable: true,
        name: 'Miercoles',
    },
    {
        char: 'J',
        isEnable: true,
        name: 'Jueves',
    },
    {
        char: 'V',
        isEnable: true,
        name: 'Viernes',
    },
    {
        char: 'S',
        isEnable: true,
        name: 'Sabado',
    },
    {
        char: 'D',
        isEnable: true,
        name: 'Domingo',
    },
]

const Alarm = (props: AlarmProps) => {
    const { container, alarmSides, leftSide, rightSide, leftTime, textNote, containerNote } = style;
    const { hasNote, daystoReapeat, isEnable, repeat, ringtone, time, repeatEveryDay } = props.alarm;


    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(isEnable ? 0.8 : 0.3)).current;
    
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0.8,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    
    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
        
    const [isEnabled, setIsEnabled] = useState(isEnable);
    const toggleSwitch = () => setIsEnabled(previousState => {previousState ? fadeOut() : fadeIn() ; return !previousState;});
        


    return (<Animated.View style={[container, { opacity: fadeAnim }]}> 
        <View style={alarmSides}>
            <View style={leftSide}>
                {!!hasNote ? (<View style={containerNote}><Text style={ textNote } numberOfLines={1}>{ hasNote }</Text></View>) : null}
                <View style={{flexDirection: 'row'}}>
                    {DaysOfTheWeek.map( (day, index) => {
                        day.isEnable = repeatEveryDay ? repeatEveryDay : daystoReapeat.includes(day.char);
                        return (<Days day={day} key={index}/>)
                    })}
                </View>
                <View style={containerNote}><Text style={ textNote } numberOfLines={1} >{ringtone}</Text></View>

            </View>
            <View style={rightSide}>
                <Text style={leftTime}>{time}</Text>
                <Switch
                value={isEnabled} 
                onValueChange={toggleSwitch} 
                trackColor={{false: '#767577', true: 'white'}}
                thumbColor={isEnabled ? colorPalette.primary : '#B5B5B5'}
                />
            </View>
        </View> 
            </Animated.View>
    )
}

const style = StyleSheet.create({
    container: { margin: 10, borderWidth: 1, borderRadius: 25, height: 100, backgroundColor: colorPalette.secondary },
    alarmSides: {flexDirection: 'row', flex: 1},
    rightSide: {width: '40%', alignItems: 'center', justifyContent: 'center'},
    leftSide: {width: '60%', alignItems: 'center', justifyContent: 'space-evenly'},
    leftTime: { color: 'white', fontSize: 20, fontWeight: '700', marginBottom: 5},
    textDays: { color: 'white'},
    containerNote: { alignSelf: 'flex-start', marginHorizontal: 20},
    textNote: { color: 'white'}
})

export default Alarm;
