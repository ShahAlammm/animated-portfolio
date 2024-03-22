import { Lamp } from "@/utils/Lamp/Lamp";
import { TextGenerate } from "@/utils/Text/TextGenerate";
import { TextRevealCardPreview } from "@/utils/Text/TextCard";
import Skills from "./Skills";




const About = () => {
    return (
        <div>
            <Skills />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <Lamp />
                </div>

                <div className="flex-1">
                    <TextRevealCardPreview />
                    <TextGenerate />
                </div>

            </div>
        </div>
    );
};

export default About;