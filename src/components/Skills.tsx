import { Badge } from "./badge";
import { BlurFade } from "./magicui/blur-fade";

export default function Skills() {
    return (
        <>
        <BlurFade>
            <br />
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="flex">
                <div className="pr-1">
                    <Badge className="bg-blue-600 text-white transform transition-transform hover:translate-y-[-3px]">TypeScript</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-blue-600 text-white transform transition-transform hover:translate-y-[-3px]">React.js</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-blue-600 text-white transform transition-transform hover:translate-y-[-3px]">Tailwind</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-red-500 text-white transform transition-transform hover:translate-y-[-3px]">Firebase</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-orange-400 text-white transform transition-transform hover:translate-y-[-3px]">Proxmox</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-black text-white transform transition-transform hover:translate-y-[-3px]">OpnSense</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-black text-white transform transition-transform hover:translate-y-[-3px]">Linux</Badge>
                </div>
                <div className="pr-1">
                    <Badge className="bg-green-700 text-white transform transition-transform hover:translate-y-[-3px]">AutoHotkey</Badge>
                </div>
            </div>
            <br />
        </BlurFade>
        </>
    );
}
