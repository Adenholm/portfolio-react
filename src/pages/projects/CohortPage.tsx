import ProjectDetails from "../../components/ProjectDetails";
import backgroundimg from '../../assets/images/background.png';
import cohortimg from '../../assets/images/cohort.png';

const CohortPage: React.FC = () => {
    const details = {
        title: "Cohort Manager",
        subtitle: "A Web Application for Managing Student Cohorts",
        description: "Cohort Manager is a web application designed to help educational institutions manage student cohorts and courses efficiently. The application allows administrators to create and manage cohorts, assign students to cohorts, and track their progress throughout the course duration. Built with a robust backend using Java and Spring Boot, and a dynamic frontend with React, Cohort Manager provides a seamless user experience for both administrators and students.",
        categories: ["Web Development", "Rest API Design"],
        team: ["Hanna Adenholm", ""],
        year: "2025",
        technologies: ["Java", "Spring Boot", "React", "REST APIs", "PostgreSQL"],
        img: cohortimg
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>

            <div className="flex w-fill justify-between max-w-5xl mx-auto pb-12 px-4">
                <a href="/projects/quack-tales" className='text-white text-lg'>Previous project: Quack Tales</a>
                <a href="/projects/rent-a-toy" className='text-white text-lg'>Next project: Rent a Toy</a>
            </div>
        </div>
    );
};

export default CohortPage;
