


const ProjectCard: React.FC<{ title: string; description: string; image: string; technologies: string; onClick: () => void }> = ({ title, description, image, technologies, onClick }) => {
    return (
        <div className="relative h-100 flex flex-col bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500 group cursor-pointer" onClick={onClick}>
            <img src={image} alt={title} className="w-full h-full object-cover rounded-t-3xl position-top group-hover:scale-105 transition-transform duration-500" />
            <div className="px-8 py-6 absolute bottom-0 left-0 w-full max-h-18 overflow-hidden group-hover:max-h-50 content-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg transition-all duration-600">
                <h2 className="text-xl font-[Josefin_sans] mb-4">{title}</h2>
                <p className="text-gray-600 text-sm italic">{description}</p>
                <p className="text-gray-600 text-sm mt-4">{technologies}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
