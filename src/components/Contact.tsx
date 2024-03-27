import { Card } from "@/utils/Card/Card";
import { Globe } from "@/utils/World/Globe";


const Contact = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse w-screen h-full">
                <div>
                    <Card />
                </div>
                <div className=" lg:w-1/2 h-72 md:h-[600px] ">
                    <Globe />
                </div>
            </div>
        </div>
    );
};

export default Contact;