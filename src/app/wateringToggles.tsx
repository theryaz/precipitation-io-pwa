import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaucet, faDatabase, IconDefinition } from '@fortawesome/free-solid-svg-icons'


export default function WateringToggles() {

    const waterSources: [IconDefinition, string, string, MouseEventHandler][] = [
        [faFaucet, "City Water", "bg-cityColor", () => { }],
        [faDatabase, "Rain Barrels", "bg-barrelColor", () => { }],
    ];

    return (
        <section id="waterToggles" className="flex items-center flex-row w-full justify-around max-w-md flex-wrap">
        {
            waterSources.map(([faIcon, title, colorClass, callback], index) => (
                <div
                    key={`source-btn-${index}`}
                    className={`${colorClass} hover:border-blue-500 hover:border-solid group flex flex-col items-center justify-center rounded-md border-2 border-slate-300 w-36 p-8`}
                    onClick={callback}
                >
                    <FontAwesomeIcon
                        icon={faIcon}
                        height={60}
                        style={{ fontSize: 88, color: "white" }}
                    />
                </div>
            ))
        }
        <div className="text-lg text-slate-600 w-full flex-none text-center mt-4 mb-4">
            Touch to Power
            <span className="text-slate-800"> ON/OFF</span>
        </div>
    </section>
  )
}