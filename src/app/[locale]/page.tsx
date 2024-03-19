import { useTranslations } from 'next-intl';
import Navbar from "@/components/Navbar";
import Banner from '@/components/Banner';

export default function Index() {
  const t = useTranslations('Index');
  return <>
    <Navbar />
    <div className='h-screen'>
      <h2>Hi</h2>
      <Banner/>
    </div>
    <div className='h-screen'>
      <h1 className=''>{('title')}</h1>
    </div>
  </>
}