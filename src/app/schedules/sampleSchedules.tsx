import { DateTime } from 'luxon';
import { WaterSource, IrrigationRun } from '../constants';


const today = DateTime.now().set({ hour: 7 });

const sampleSchedules: IrrigationRun[] = [
    { start: today, minutes: 12, source: WaterSource.CITY, fallbackEnabled: false },
    { start: today.plus({ day: 1 }), minutes: 6, source: WaterSource.RAINBARREL, fallbackEnabled: true },
    { start: today.plus({ day: 2 }), minutes: 6, source: WaterSource.RAINBARREL, fallbackEnabled: false },
]

