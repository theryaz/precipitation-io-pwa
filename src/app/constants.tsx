import { faFaucet, faDatabase, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { DateTime } from "luxon";

export const enum WaterSource {
    CITY = "CITY",
    RAINBARREL = "RAINBARREL",
}

export const WaterSourceIconMap: { [x:string]: IconDefinition } = {
    [WaterSource.CITY]: faFaucet,
    [WaterSource.RAINBARREL]: faDatabase
};

export interface IrrigationRun {
    start: DateTime,
    minutes: number,
    source: WaterSource,
    fallbackEnabled: boolean
}