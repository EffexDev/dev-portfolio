import { WordRotate } from "./magicui/word-rotate";
import { TypingAnimation } from "./magicui/typing-animation";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Socials from "./Socials";
import { BorderBeam } from "./magicui/border-beam";
import { BlurFade } from "./magicui/blur-fade";
import { TextAnimate } from "./magicui/text-animate";

function Header() {

    return (
        <BlurFade>
            <div className="relative border-2 border-gray-600 rounded-3xl p-10 hover:scale-101 duration-200 ease-in-out pb-5">
            <TypingAnimation className="text-3xl sm:text-4xl font-bold">Jordan Cartledge</TypingAnimation>
            <p className="inline-flex items-baseline text-2xl text-black dark:text-white">
                <span className="inline-block">
                    <WordRotate
                        className="text-2xl"
                        words={["Frontend Developer", "Designer"]}
                    />
                </span>
            </p>
            <TextAnimate animation="slideLeft" by="character">
            Specialising in performant, responsive and beautiful websites. 
            </TextAnimate>
            <div className="flex flex-row pt-2">
            <FmdGoodOutlinedIcon />
                <div className="pl-2">
                <p>Perth, WA</p>
                </div>
            </div>
            
            <Socials />
            <BorderBeam duration={8} size={110} />
        </div>
        </BlurFade>
    )
}

export default Header;