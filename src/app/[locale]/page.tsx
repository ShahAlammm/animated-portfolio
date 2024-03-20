import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';

import { TracingBeam } from '@/components/ui/tracing-beam';
import About from '@/components/About';






export default function Index() {
  const t = useTranslations('Index');
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <TracingBeam className='px-4'>
        <Banner />
        <About/>
      </TracingBeam>
    </main>
  )
}