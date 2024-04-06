import IDays from "./IDays";

interface IAlarm {
    isEnable: boolean;
    time: string;
    daystoReapeat: string[];
    repeat: boolean;
    repeatEveryDay?: boolean;
    ringtone: string;
    hasNote?: string;
    // AllDays: IDays[]
}


export default IAlarm