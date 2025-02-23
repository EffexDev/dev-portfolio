import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import forge from "../assets/effexforge.jpg"
import buddy from "../assets/buddy.jpg"
import aussie from "../assets/aussie.jpg"
import Avatar from "./Avatar"
import { BlurFade } from "./magicui/blur-fade"

export default function WorkExperience() {
    return (
        <BlurFade delay={0.25} inView>
        <div className="pb-3">
        <div className="relative border-2 border-gray-600 rounded-3xl p-10 hover:scale-101 duration-200 ease-in-out pb-3">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="max-w-1xl">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <Avatar img={forge} />
                            <div className="flex justify-between w-full items-center">
                                <p className="mr-4">
                                    Effex Forge
                                    <br />
                                    <span className="text-gray-500 dark:text-white">Founder</span> 
                                </p>
                                <p>2025</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        At Effex Forge, I took the initiative to build everything from the ground up. As the founder, I designed and developed the website, managed hosting, and created detailed documentation. Additionally, I handle all marketing efforts to ensure strong brand visibility and growth, driving engagement through consistent content and strategic SEO.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <Avatar img={buddy} />
                            <div className="flex justify-between w-full items-center">
                                <p className="mr-4">
                                    Buddy Telco
                                    <br />
                                    <span className="text-gray-500 dark:text-white">Customer Experience</span> 
                                </p>
                                <p>2024-2025</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        As part of a tight-knit team of six, I played a key role in launching the entire customer experience framework at Buddy Telco. This included developing internal knowledge management documentation, streamlining processes, and building custom software tools to enhance efficiency and automation. My contributions helped shape a seamless experience for both customers and internal teams.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <Avatar img={aussie} />
                            <div className="flex justify-between w-full items-center">
                                <p className="mr-4">
                                    Aussie Broadband
                                    <br />
                                    <span className="text-gray-500 dark:text-white">Customer Service</span> 
                                </p>
                                <p>2022-2024</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        At Aussie Broadband, I ensured top-tier customer service while mentoring new team members through structured training programs. I also played a key role in refining internal documentation, making it more accessible and effective for both new and existing staff. </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            </div>
            </div>
        </BlurFade>

    )
}
