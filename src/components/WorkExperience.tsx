import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import forge from "../assets/effexforge.jpg"
import buddy from "../assets/buddy.jpg"
import aussie from "../assets/aussie.jpg"
import Avatar from "./Avatar"
import { BlurFade } from "./magicui/blur-fade"

export default function WorkExperience() {
    return (
        <BlurFade delay={0.25} inView>
        <div className="pt-5">
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
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
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
                                <p>2025</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <Avatar img={aussie} />
                            <div className="flex justify-between w-full items-center">
                                <p className="mr-4">
                                    Founded Effex Forge
                                    <br />
                                    <span className="text-gray-500 dark:text-white">Founder</span> 
                                </p>
                                <p>2025</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        </BlurFade>

    )
}
