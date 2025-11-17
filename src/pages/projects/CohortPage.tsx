import ProjectDetails from "../../components/ProjectDetails";
import backgroundimg from '../../assets/images/background.png';
import cohortimg from '../../assets/images/cohort.png';
import ProjectLink from "../../components/ProjectLink";

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

            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12 px-4">
                <ProjectLink link="/projects/quack-tales" name="Quack Tales" next={false} />
                <ProjectLink link="/projects/wolfsbane" name="Wolfs Bane" next={true} />
            </div>
        </div>
    );
};

export default CohortPage;
