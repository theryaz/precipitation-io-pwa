'use client';
import BarrelStats from './barrelStats';
import WateringToggles from './wateringToggles';

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      
      <WateringToggles/>
      <BarrelStats/>

    </main>
  )
}
