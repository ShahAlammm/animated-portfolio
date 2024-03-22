import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';

import { TracingBeam } from '@/components/ui/tracing-beam';
import About from '@/components/About';
import { Spotlight } from '@/components/ui/Spotlight';






export default function Home () {
  const t = useTranslations('Index');
  return (
    <>
      <main className="h-screen w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <TracingBeam className='px-4'>
          <Spotlight
            className="-top-40 left-0 md:left-60 lg:left-72 md:-top-20"
            fill="white"
          />
          <div >
            <Banner />
            {/* <About/> */}
          </div>
        </TracingBeam>
      </main>
    </>
  )
}