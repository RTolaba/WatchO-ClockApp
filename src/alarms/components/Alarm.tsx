import { Animated, Button, StyleSheet, Switch, Text, View } from "react-native";
import React, { useRef, useState } from 'react'
import colorPalette from "../../Resources/Colors";
import Days from "./Day";

interface AlarmProps {
    hasNote?: string;
}

const Alarm = (props: AlarmProps) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0.8)).current;
    
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
        
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => {previousState ? fadeOut() : fadeIn() ; return !previousState;});
    
    const managerFadeBG = () => {
        toggleSwitch();
        fadeIn;
    }
        
    const { container, alarmSides, leftSide, rightSide, leftTime, textNote, containerNote } = style;
    const { hasNote = true } = props;
    const ContainerbackgroundColor = isEnabled ? colorPalette.primary : '#078a8570';


    return (<Animated.View style={[container, { opacity: fadeAnim }]}>
        <View style={alarmSides}>
            <View style={leftSide}>
                {hasNote ? (<View style={containerNote}><Text style={ textNote } numberOfLines={1} > Avisar de Mercaderia en la cinta metrica ahre falopa</Text></View>) : null}
                <View style={{flexDirection: 'row'}}>
                    <Days textDay={'L'}/>
                    <Days textDay={'M'}/>
                    <Days textDay={'X'}/>
                    <Days textDay={'J'}/>
                    <Days textDay={'V'}/>
                    <Days textDay={'S'}/>
                    <Days textDay={'D'}/>
                </View>
                {hasNote ? (<View style={containerNote}><Text style={ textNote } numberOfLines={1} > # Canserbero - Jeremias 9:11</Text></View>) : null}

            </View>
            <View style={rightSide}>
                <Text style={leftTime}>05:22</Text>
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
