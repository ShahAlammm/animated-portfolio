import { TextRevealCardPreview } from '@/utils/Text/TextCard';
import { GlobeDemo } from '@/utils/World/Globe';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { MovingBorder } from '@/utils/Button/MovingButton';
import { TextLoop } from '@/utils/Text/TextLoop';

const Banner = () => {
    return (
        <>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='pt-44'>
                {/* <div><GlobeDemo/></div> */}
                <div>
                    <div className="p-6 text-5xl font-bold">
                        <h1>Hello !</h1>
                        <h2>My Name Is</h2>
                        <TextLoop/>
                    </div>
                    <TextRevealCardPreview />
                    <div className="px-6"><MovingBorder /></div>
                </div>

            </div>
        </>
    );
};

export default Banner;