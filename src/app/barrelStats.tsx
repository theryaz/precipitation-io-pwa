import Image from 'next/legacy/image'
import WhiteBarrel from "/public/WhiteBarrel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faStopwatch } from '@fortawesome/free-solid-svg-icons'


export default function BarrelStats() {

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
                    <div className="stat flex pt-2 pb-2">
                        <span className="mr-1 text-2xl">55 Gal</span>
                    </div>
                    <div className="stat flex py-1 items-center text-xl">
                        <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            className="fa-rotate-90 mr-1"
                            width={30}
                        />
                        14cm
                    </div>
                    <div className="stat flex pt-1 pb-1 text-xl items-center">
                        <FontAwesomeIcon
                            icon={faStopwatch}
                            className="mr-1"
                            width={30}
                        />
                        7mins
                    </div>
                </div>
            </div>
        </section>
    )
}