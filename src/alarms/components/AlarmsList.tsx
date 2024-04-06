import { FlatList, View } from "react-native";
import Alarm from "./Alarm";
import IAlarm from "../interfaces/IAlarm";


interface AlarmListProps {
    data: IAlarm[];
}

const AlarmList = (props?: AlarmListProps) => {

    const alarms: IAlarm[] = [
        {
            isEnable: false,
            daystoReapeat: ['L', 'V'],
            repeat: true,
            ringtone: '# Canserbero - Jeremias 9:11',
            time: '18:00',
            hasNote: 'Pasar Comprando alimento',
        },
        {
            isEnable: true,
            daystoReapeat: ['L', 'X', 'V'],
            repeat: true,
            ringtone: 'Phantom - Everyday is pain',
            time: '21:00',
            hasNote: 'Ingles',
        },
        {
            isEnable: true,
            daystoReapeat: ['L', 'M', 'X', 'J', 'V'],
            repeat: true,
            ringtone: 'AZUFRE',
            time: '07:00',
        },{
            isEnable: true,
            daystoReapeat: [],
            repeat: true,
            ringtone: 'Calle 13 - Jhon el ezquisofrenico',
            time: '13:00',
            hasNote: 'Pastilla medica - 20 mg antes de almorzar',
            repeatEveryDay: true,
        },
    ];

    return (
        <View>
            <FlatList
            data={alarms}
            renderItem={(e) => <Alarm alarm={e.item} key={e.index} />} 
            />
        </View>
    )

};

export default AlarmList;