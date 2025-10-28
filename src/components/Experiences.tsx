interface Experience {
    title: string;
    date: string;
    company: string;
    descriptions: string[];
}

interface ExperienceProps {
    experience: Experience;
}

const Experiences: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-medium">{experience.title}</h3>
            <p className="text-sm text-gray-600">{experience.company} - {experience.date}</p>
            {experience.descriptions.length > 0 && (
                <ul className="list-disc ml-5 mt-2">
                    {experience.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Experiences;