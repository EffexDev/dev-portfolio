import { BlurFade } from "./magicui/blur-fade";

export default function Skills() {
    return (
        <>
        <BlurFade delay={0.25} inView>

        <div className="flex flex-row justify-center flex-wrap pb-3">
        <div className="pt-3 pr-2">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>JavaScript</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>TypeScript</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-4xl p-2 items-center"><p>React.js</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>Tailwind</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>Firebase</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>Proxmox</p></div>
            </div>
            <div className="pt-3 pr-2 flex flex-wrap">
                <div className="flex flex-row border-2 border-gray-600 rounded-3xl p-2 items-center"><p>opnSense</p></div>
            </div>
        </div>

        </BlurFade>
        </>
    );
}
