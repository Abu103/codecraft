import { Button } from "./ui/button";

const CTA = () => {
    return (
        <section className="my-15">
            <div className=" flex flex-col gap-4 text-center">
                <h2 className="font-semibold text-3xl">Ready to level up your frontend game?</h2>
                <Button className="w-fit place-self-center">Start building</Button>
            </div>
        </section>
    );
};

export default CTA;