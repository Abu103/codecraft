import {  BrainCog, Globe, Lightbulb, Package2, Palette, Rocket } from "lucide-react";
import { Card, CardDescription, CardHeader } from "./ui/card";

const Features = () => {
    return (
        <section>
            <div className="flex flex-col place-content-center text-center py-10 gap-3 md:gap-5 md:py-15">
                <h2 className="text-3xl font-bold md:text-4xl place-self-center">Why CodeCraft?</h2>
                <p className="text-gray-500 dark:text-gray-300 text-balance md:text-xl">CodeCraft gives you the resources, inspiration, and structure to grow as a frontend developer.</p>
            </div>
            <div className=" w-full items-center">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly">
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <Globe size={34} />
                                <h2 className="text-xl font-semibold">Real World Projects</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Build real-world inspired interfaces, from landing pages to dashboards and e-commerce UIs.
                            </CardDescription>
                        </Card>
                    </div>
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <BrainCog size={34} />
                                <h2 className="text-xl font-semibold">Progressive Challenges</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Tackle progressively harder challenges to develop problem-solving confidence.
                            </CardDescription>
                        </Card>
                    </div>
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <Palette size={34} />
                                <h2 className="text-xl font-semibold">Design Assets</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Use ready-made color palettes and font pairings to stay focused on structure and code.
                            </CardDescription>
                        </Card>
                    </div>
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <Lightbulb size={34} />
                                <h2 className="text-xl font-semibold">Helpful Resources</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Get access to curated learning materials to help with accessibility, responsiveness, and performance.                            </CardDescription>
                        </Card>
                    </div>
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <Package2 size={34} />
                                <h2 className="text-xl font-semibold">Modern Workflows</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Practice working with reusable components and modern workflows (Tailwind, React, etc.).                            </CardDescription>
                        </Card>
                    </div>
                    <div className="w-11/12 place-self-center">
                        <Card className="flex">
                            <CardHeader className="flex items-center gap-3">
                                <Rocket size={34} />
                                <h2 className="text-xl font-semibold">Build a Portfolio</h2>
                            </CardHeader>
                            <CardDescription className="text-start px-5 self-center tracking-wider">
                                Build a portfolio with projects that showcase both your design eye and coding chops.                            </CardDescription>
                        </Card>
                    </div>
                </section>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-balance text-center my-5 md:text-xl md:my-10">Whether you're prepping for job interviews, portfolio reviews, or just want to get better, this is the place to start building with purpose.</p>
        </section>
    )
}

export default Features;