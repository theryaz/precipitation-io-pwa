import { faFaucet, faDatabase, IconDefinition } from '@fortawesome/free-solid-svg-icons'


export const enum WaterSource {
    CITY = "CITY",
    RAINBARREL = "RAINBARREL",
}

export const WaterSourceIconMap: { [x:string]: IconDefinition } = {
    [WaterSource.CITY]: faFaucet,
    [WaterSource.RAINBARREL]: faDatabase
};