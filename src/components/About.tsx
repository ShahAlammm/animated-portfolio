"use client"
import { Lamp } from "@/utils/Lamp/Lamp";
import { TextGenerate } from "@/utils/Text/TextGenerate";
import { TextRevealCardPreview } from "@/utils/Text/TextCard";
import Skills from "./Skills";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from 'framer-motion';
import { SparklesIcon } from "@heroicons/react/24/solid";
import { TextLoop } from "@/utils/Text/TextLoop";



const About = () => {
    return (
        <div>
            <Skills />
            <motion.div
                variants={slideInFromLeft(0.8)}
                className='Welcome-box py-[16px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[5px] h-7 w-10' />
                <h1 className="Welcome-text text-[13px]">You Have To Know Me</h1>
            </motion.div>
            <TextRevealCardPreview />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <Lamp />
                </div>

                <div className="flex-1">
                    <TextLoop />
                    <TextGenerate />
                </div>

            </div>
        </div>
    );
};

export default About;