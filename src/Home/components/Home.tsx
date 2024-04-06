import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import colorPalette from "../../Resources/Colors";
import Alarm from "../../alarms/components/Alarm";
import ButtomAddAlarm from "../../alarms/components/ButtonAddAlarm";
import AlarmList from "../../alarms/components/AlarmsList";




const Home = () => {
    const { title, container, line } = style;
    return (<View style={container}>
                <Text style={title}>Alarmas</Text>
                <View style={line} />
                <AlarmList  data={[]}/>
                <View style={{flex: 1, justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
                    <ButtomAddAlarm />

                </View>
            </View>
            )
}

const style = StyleSheet.create({
    container: { margin: 10, flex: 1, height: 600 },
    title: {color: 'white', fontSize: 30},
    line: { borderWidth: 1, borderColor: colorPalette.secondary, marginVertical: 10 }
})

export default Home;
