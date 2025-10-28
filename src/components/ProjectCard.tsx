


const ProjectCard: React.FC<{ title: string; description: string; image: string; technologies: string }> = ({ title, description, image, technologies }) => {
    return (
        <div className="flex flex-col bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:scale-102 transition-shadow duration-300 transition-transform duration-300">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-3xl position-top hover:scale-105 transition-transform duration-300" />
            <div className="p-8">
                <h2 className="text-xl font-[Josefin_sans]">{title}</h2>
                <p className="text-gray-500 text-sm italic">{description}</p>
                <p className="text-gray-400 text-xs mt-4">{technologies}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
