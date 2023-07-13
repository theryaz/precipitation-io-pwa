import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { DateTime } from "luxon";
import { WaterSource, WaterSourceIconMap, IrrigationRun } from './constants';


export default function SchedulesBrief() {

    const today = DateTime.now().set({ hour: 7 });

    const sampleSchedules: IrrigationRun[] = [
        { start: today, minutes: 12, source: WaterSource.CITY, fallbackEnabled: false },
        { start: today.plus({ day: 1 }), minutes: 6, source: WaterSource.RAINBARREL, fallbackEnabled: true },
        { start: today.plus({ day: 2 }), minutes: 6, source: WaterSource.RAINBARREL, fallbackEnabled: false },
    ]

    const renderTime = (runStart: DateTime) => {
        return (
            <div>
                <span className="w-11 inline-block">{runStart.day}/{runStart.month}</span>
                <span className="w-11 inline-block">{runStart.weekdayShort}</span>
                <span> {runStart.toFormat("h:mma").toLowerCase()}</span>
            </div>
        )
    }
    const renderIcon = (source: WaterSource, fallbackEnabled: boolean) => {
        const iconColor = source === WaterSource.CITY ? "text-cityColor" : "text-pumpColor";
        let icon = WaterSourceIconMap[source];
        if (source == WaterSource.RAINBARREL) {
            const subIcon = {
                colorClass: (fallbackEnabled) ? "text-red-500" : "text-green-500",
                iconName: (fallbackEnabled) ? faX : faPlus
            }
            return (
                <span className="fa-stack h-auto w-10" style={{"verticalAlign": "top"}}>
                    <FontAwesomeIcon
                        className={`pl-2 ${iconColor}`}
                        icon={icon}
                        style={{ fontSize: 20 }}
                    />
                    <FontAwesomeIcon
                        className={`${subIcon.colorClass} absolute`}
                        icon={subIcon.iconName}
                        style={{ fontSize: 10, bottom: 3 }}
                    />
                </span>
            )
        }
        // source = city
        return (
            <FontAwesomeIcon
                className="text-cityColor w-10"
                icon={icon}
                height={60}
                style={{ fontSize: 20 }}
            />
        );
    }

    return (
        <section id="scheduleBrief" className="flex items-center flex-col w-full justify-around max-w-md">
            <div className="w-full text-lg flex flex-row justify-between px-2">
                <div className="text-slate-600 text-xl">Upcoming</div>
                <div className="text-slate-500">next 3 days</div>
            </div>
            {
                sampleSchedules.map(({start, minutes, source, fallbackEnabled}, index) => {
                    return (
                        <div key={`run-${index}`}
                            className="w-full rounded-md group border-2 py-1 px-2 my-1 text-lg flex flex-row items-center
                                justify-between text-slate-500">
                            <div>{renderTime(start)}</div>
                            <div>
                                {minutes}mins
                                {renderIcon(source, fallbackEnabled)}
                            </div>
                        </div>
                    )
                }
                )
            }
            <div key="addRun"
                className="w-full rounded-md group border-2 py-1 px-2 text-lg flex flex-row items-center
                                justify-between text-slate-500">
                <div className="m-auto">
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        height={30}
                    />
                </div>
            </div>
        </section>
    )
}