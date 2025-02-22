import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
  import { Badge } from "./badge";
  import { BlurFade } from "./magicui/blur-fade";
  import { ShimmerButton } from "./magicui/shimmer-button";

  function ProjectCard({title, technologies, content, button, url}: {title: string, technologies: string, content: string, button: string, url: string}) {
    return (
        <div className="flex-1 pb-5 w-full">
            <BlurFade delay={0.25} inView>
                <Card className="relative overflow-hidden dark:text-white">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>
                            <div className="pr-1">
                                <Badge className="bg-black text-white transform transition-transform hover:translate-y-[-3px]">
                                    {technologies}
                                </Badge>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{content}</p>
                    </CardContent>
                    <CardFooter>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <ShimmerButton className="shadow-2xl scale-90">
                            <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                            {button}
                            </span>
                        </ShimmerButton>
                    </a>
                    </CardFooter>
                </Card>
            </BlurFade>            
        </div>
    );
}

export default ProjectCard;