import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

export type WateringTogglesProps = {
    waterSources: WaterSource[]
}

export type WaterSource = {
    icon: IconDefinition,
    title: string,
    colorClass: string,
    onClick: MouseEventHandler,
    isOn: boolean,
}

export const WateringToggles = ({ waterSources }: WateringTogglesProps) => {

    return (
        <section id="waterToggles" className="flex items-center flex-row w-full justify-around max-w-md flex-wrap">
            {
                waterSources.map(({ icon, title, colorClass, onClick, isOn }, index) => (
                    <div>
                        <div
                            key={`source-btn-${index}`}
                            className={`${colorClass} hover:border-blue-500 hover:border-solid group flex flex-col items-center justify-center rounded-md border-2 border-slate-300 w-36 p-8`}
                            onClick={onClick}
                        >
                            {/* Animate icon when isOn is true */}
                            <FontAwesomeIcon
                                icon={icon}
                                height={60}
                                style={{ fontSize: 88, color: "white" }}
                            />
                        </div>
                        <div className='text-center mt-2'>
                            {title} {isOn ? ": ON" : ""}
                        </div>
                    </div>
                ))
            }
        </section>
    )
}