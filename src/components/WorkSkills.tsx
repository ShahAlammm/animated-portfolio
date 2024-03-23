"use client"
import { SparklesIcon } from "@heroicons/react/24/solid";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from 'framer-motion';
import { slideInFromLeft } from "@/utils/motion";
export function WorkSkills() {
    return (
        <>
            <section
                id="skills"
                className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
                style={{ transform: "scale(0.9" }}
            >
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='Welcome-box py-[16px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-7 w-10' />
                    <h1 className="Welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
                </motion.div>
            </section>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </>
    );
}
export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];
