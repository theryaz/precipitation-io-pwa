import classnames from 'classnames'
import Image from 'next/legacy/image'
import WhiteBarrel from "/public/WhiteBarrel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBottleWater, faGlassWaterDroplet, faRulerHorizontal, faRulerVertical, faSpinner, faStopwatch, faWater } from '@fortawesome/free-solid-svg-icons'

import { IrrigationSystemStatus } from '@/api/rainbarrel-api'

export type BarrelStatsProps = {
    status: IrrigationSystemStatus,
    metric?: boolean,
}

const litresToGallons = (l: number) => l * 0.264172

export default function BarrelStats({ status, metric = false }: BarrelStatsProps) {

    const total_capacity = Math.round(metric ? status.total_capacity_litres : litresToGallons(status.total_capacity_litres))
    const current_volume = Math.round(metric ? status.current_volume_litres : litresToGallons(status.current_volume_litres))

    return (
        <section id="barrelStats" className="w-full pt-4 pb-3">
            <div className="flex flex-row justify-between">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src={WhiteBarrel}
                    alt="Rain Barrel"
                    height={260}
                    width={170}
                />
                <div id="stats" className="flex flex-col justify-center shrink-0 grow p-4">
                    <div className="stat flex items-center pt-2 pb-2">
                        <FontAwesomeIcon
                            icon={faGlassWaterDroplet}
                            className="mr-1"
                            width={30}
                        />
                        <span className="mr-1 text-2xl">
                            {current_volume}
                            {/* Smaller text with lighter color */}
                            <span className='text-xs text-stone-500'>/{total_capacity} {metric ? "litres" : "gallons"}</span>
                        </span>
                    </div>
                    <div className="stat flex py-1 items-center text-xl">
                        <FontAwesomeIcon
                            icon={faRulerVertical}
                            className="mr-1"
                            width={30}
                        />
                        {status.percent_full.toFixed(0)}
                        <span className='text-xs text-stone-500'>%</span>
                    </div>
                    {status.pump_is_on ? (
                        <div className="stat flex mt-2 pt-1 pb-1 text-xl items-center">
                            <FontAwesomeIcon
                                icon={faSpinner}
                                className="mr-1 animate-spin"
                                width={30}
                            />
                            <span className='text-xs text-stone-500'>
                                Pump is on
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}