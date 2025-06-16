import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="flex flex-col place-content-center mt-[4rem] md:mt-[5rem] text-center gap-1">
            <h1 className="text-4xl font-bold md:text-5xl pb-4">Become a better frontend developer.</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-300 text-balance">Take your frontend skills to the next level by recreating real websites from real companies.</p>
            <p className="text-gray-500 md:text-xl dark:text-gray-300 text-balance pt-2">The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
            <div className="flex gap-3 place-content-center my-5 md:pt-3 md:gap-5">
                <Button>View Projects</Button>
                <Button>Learn More</Button>
            </div>
        </div >
    )
}

export default Hero;