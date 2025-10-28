


const ProjectCard: React.FC<{ title: string; description: string; image: string; technologies: string }> = ({ title, description, image, technologies }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-md">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-3xl position-top" />
            <div className="p-8">
                <h2 className="text-xl font-[Josefin_sans]">{title}</h2>
                <p className="text-gray-500 text-sm">{description}</p>
                <p className="text-gray-400 text-xs mt-4">{technologies}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
