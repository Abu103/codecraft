import { Mountain } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <nav className="flex justify-between  mx-2 py-3">
            <div className="flex gap-1 items-center font-bold">
                <Mountain />
                <h2 className="text-xl">CodeCraft</h2>
            </div>
            <div className="flex gap-3 transition items-center">
                <p className="hover:border-b-1 hover:border-white cursor-pointer">Home</p>
                <p className="hover:border-b-1 hover:border-white cursor-pointer">Project</p>
                <p className="hover:border-b-1 hover:border-white cursor-pointer">FAQ</p>
                <ModeToggle />
            </div>
        </nav>
    );
}
export default Navbar;