import { WordRotate } from "./magicui/word-rotate";
import { TypingAnimation } from "./magicui/typing-animation";

function Header() {

    return (
        <div>
            <TypingAnimation className="text-4xl font-bold">Hi, I'm Jordan ✌️</TypingAnimation>
            <p className="inline-flex items-baseline text-2xl text-black dark:text-white">
            I am {"    "}
                <span className="inline-block pl-1">
                    <WordRotate
                        className="text-2xl"
                        words={["a designer.", "a developer.", "an enthusiast."]}
                    />
                </span>
            </p>
            <br />
            <br />
            <h3 className="text-xl font-bold">About</h3>
            <p id="type">In the past I have worked in production, broadcasting, UX/UI and graphic design. Building beautiful things has always been a passion of mine, so having earned a Bachelor of Design and rediscovering my love of development, I decided to start a web design company. </p>

        </div>
    )
}

export default Header;