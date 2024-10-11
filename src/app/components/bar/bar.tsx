import shape from'@/public/Shape.png';
import Image from 'next/image';
export default function bar(){
    return(
        <>
        <input type="text" placeholder='Пошук'/>
        <Image src={shape} alt='search' className='w-20 h-20'></Image>
        </>
    )
}