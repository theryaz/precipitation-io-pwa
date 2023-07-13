'use client';
import BarrelStats from './barrelStats';
import WateringToggles from './wateringToggles';
import SchedulesBrief from './schedulesBrief';

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      
      <BarrelStats/>
      <div className="divider w-full border-t-2 border-slate-300 py-2"/>
      <WateringToggles/>
      <div className="divider w-full border-t-2 border-slate-300 pt-2 pb-3"/>
      <SchedulesBrief/>

    </main>
  )
}
