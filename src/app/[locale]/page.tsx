import { useTranslations } from 'next-intl';
import { TracingBeam } from '@/components/ui/tracing-beam';
import About from '@/components/About';
import { Spotlight } from '@/components/ui/Spotlight';
import { Project } from '@/components/Project';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';
import { Email } from '@/utils/Contact/Email';






export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 xl:left-80 md:-top-20 xl:-top-40"
          fill="white"
        />
      </div>
      <div className="w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden z-40">
        <TracingBeam className='px-4'>
          <Hero />
          <Skills />
          <About />
          <Contact />
          <Project />
          <Email />
        </TracingBeam>
      </div>
    </>
  )
}