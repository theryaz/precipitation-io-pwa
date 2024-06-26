'use client';
import BarrelStats from './barrelStats';
import { WateringToggles, WaterSource } from './wateringToggles';
import SchedulesBrief from './schedulesBrief';
import {
  faFaucetDrip,
  faArrowUpFromWaterPump,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { IrrigationSystemStatus, getIrrigationSystemStatus, turnPumpOff, turnPumpOn } from '@/api/rainbarrel-api'
import { useEffect, useState } from 'react';
import { useIrrigationApi } from '@/hooks/useIrrigationApi';

export default function Home() {

  const { status, togglePump } = useIrrigationApi();

  const waterSources: WaterSource[] = [
    // {
    //   icon: faFaucetDrip,
    //   title: "City Water",
    //   colorClass: "bg-cityColor",
    //   onClick: () => { },
    //   isOn: false,
    // },
    {
      icon: faArrowUpFromWaterPump,
      title: "Rain Barrel Pump",
      colorClass: "bg-barrelColor",
      onClick: () => {
        togglePump()
      },
      isOn: status.pump_is_on,
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">

      <BarrelStats status={status} />
      <div className="divider w-full border-t-2 border-slate-300 py-2" />
      <WateringToggles waterSources={waterSources} />
      {/* <div className="divider w-full border-t-2 border-slate-300 pt-2 pb-3" />
      <SchedulesBrief /> */}

    </main>
  )
}
