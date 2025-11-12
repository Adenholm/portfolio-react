import ArrowIcon from "../assets/icons/arrow";
import "../styles/textAnimations.css"
import "../styles/draw.css"
import LeafUnderline from "../assets/icons/leaf";
import { Link } from "react-router-dom";


const ProjectLink: React.FC<{ link: string, name: string, next: boolean }> = ({ link, name, next }) => {
    return (
        <p className="group relative w-max">
            <div className="flex flex-row gap-2 items-center">
                {!next && <ArrowIcon size={24} color="white" className="rotate-180 group-hover:rotate-x-180 transition-transform duration-700"/>}
                <Link to={link} className='text-white text-lg'>{next ? `Next project: ${name}` : `Previous project: ${name}`}</Link>
                {next && <ArrowIcon size={24} color="white" className="group-hover:rotate-x-180 transition-transform duration-700"/>}
            </div>
            {next && <LeafUnderline size={240} color="#fff" className="absolute -bottom-6 left-0 right-0 mx-auto"/>}
            {next || <LeafUnderline size={240} color="#fff" className="absolute -bottom-6 right-0 mx-auto scale-x-[-1]"/>}
        </p>
    );
}

export default ProjectLink;