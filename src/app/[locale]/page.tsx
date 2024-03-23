import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';

import { TracingBeam } from '@/components/ui/tracing-beam';
import About from '@/components/About';
import { Spotlight } from '@/components/ui/Spotlight';
import { Project } from '@/components/Project';
import { WorkSkills } from '@/components/WorkSkills';









export default function Home() {
  const t = useTranslations('Index');
  return (
    <main >
      <Spotlight
        className="-top-40 left-0 md:left-60 xl:left-80 md:-top-20 xl:-top-40"
        fill="white"
      />
      <div className="w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <TracingBeam className='px-4'>
          <Banner />
          <About />
          <div className="z-50"><WorkSkills/></div>
          <Project />
        </TracingBeam>
      </div>
    </main>
  )
}