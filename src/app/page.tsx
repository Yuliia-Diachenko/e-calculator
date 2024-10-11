import boiler from '@/public/boiler.png';
import refrigerator from '@/public/refrigerator.png';
import Link from 'next/link';
import Image from 'next/image';
import Bar from '@/app/components/bar/bar';
export default function Home() {
  return (
    <main>
      <h1 className='font-bold text-center' >На чому хочете заощадити сьогодні?</h1>
      <Bar></Bar>
      <ul className='flex'>
        <li className='m-10 border-2 border-black'><Link href='/boiler'><Image src={boiler} alt="boiler" className='w-255 h-347'/></Link></li>
        <li className='m-10 border-2 border-black'><Link href='/refrigerator'><Image src={refrigerator} alt="boiler" className='w-255 h-347'/></Link></li>
      </ul>
    </main>
  );
}
