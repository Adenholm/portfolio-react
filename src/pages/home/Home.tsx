
import image from '../../assets/images/dog.png';
import '../../styles/float.css';
import ProjectCard from '../../components/ProjectCard';
import flowerimg from '../../assets/images/flower.png';
import recipeimg from '../../assets/images/recipe.png';
import mobileimg from '../../assets/images/mobile.png';
import quacktalesimg from '../../assets/images/quacktales.gif';
import ScrollingBg from '../../components/ScrollingBg';
import cohortimg from '../../assets/images/cohort.png';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CodeIcon from '../../assets/icons/code';
import DesktopIcon from '../../assets/icons/desktop';
import DesignIcon from '../../assets/icons/design';
import AnimatedPath from '../../components/AnimatedPath';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 }); // 20% visible triggers animation

    useEffect(() => {
        if (inView) controls.start("visible");
        else controls.start("hidden");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const projects = [
        { title: "Flower", description: "A unique screen use visualization app", technologies: "Kotlin | Jetpack Compose | SQLite", image: flowerimg, link: "/projects/flower" },
        { title: "Recipes", description: "Recipe sharing web application with user authentication and CRUD functionality.", technologies: "React | .NET | PostgreSQL", image: recipeimg, link: "/projects/recipes" },
        { title: "Rent a Toy", description: "A mobile app prototype made in Figma. Focus on user-friendly design and UX principles.", technologies: "Figma | UX Design", image: mobileimg, link: "/projects/rent-a-toy" },
        { title: "Quack Tales", description: "A cooperative multiplayer game made in Unity.", technologies: "Unity | C# | Procreate", image: quacktalesimg, link: "/projects/quack-tales" },
        { title: "Cohort Manager", description: "A web application for managing student cohorts and courses.", technologies: "Java | Spring Boot | React", image: cohortimg, link: "/projects/cohort-manager" },
    ]

    return (
        <>
            <ScrollingBg/>
            <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:px-48">
                <div className= "xl:w-3xl lg:w-100 w-96">
                    <h1 className="xl:text-8xl lg:text-7xl text-6xl font-[Josefin_sans] text-amber-50 xl:w-3xl w-96">HANNA ADENHOLM</h1>
                    <h2 className="xl:text-4xl lg:text-2xl text-xl font-[Josefin_sans] text-amber-50 mt-4 md:w-3xl w-96 content">
                        <ol>
                            <li><span>Software engineer</span></li>
                            <li><span>Interaction designer</span></li>
                            <li><span>Illustrator</span></li>
                            <li><span>Fullstack developer</span></li>
                            <li><span>UX Designer</span></li>
                        </ol>
                    </h2>
                </div>

                <img src={image} alt="dog" className="xl:w-2xl lg:w-xl w-3/4 animate-float"/>
            </div>
            <motion.div className='flex w-fill justify-center md:p-24 p-8 flex-col gap-8 items-center bg-linear-to-t from-amber-50 from 10+'
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}>
                <h1 className="text-5xl font-[IBM_Plex_Serif] italic text-amber-50 px-50 py-4  mb-4 bg-linear-to-r  via-[#A7956C] from-10% via-50% to-90%">My Expertise</h1>
                <AnimatedPath color="#fff" size={180} className="mt-[-78px] ml-50 rotate-[-4deg]"/>
                {/*<p className='max-w-4xl text-center '>
                I'm Hanna, a passionate fullstack developer and software engineer with a keen interest in UX and user-friendly design. Welcome to my portfolio where I showcase my projects, skills, and experiences. Feel free to explore and reach out if you'd like to connect!
                </p>*/}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl'>
                    <motion.div className='flex flex-col gap-4 bg-amber-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' variants={itemVariants} key={1}> 
                        <CodeIcon size={54} color="#5f504eff" className='bg-[#e1d3abff] rounded-full p-2'/> 
                        <h3 className="text-2xl font-[Josefin_sans]">Software Engineering</h3>
                        <p className='text-gray-600'>Experienced in both OOP and functional. Proficient in Java, Spring Boot, Python, .NET and SQL.</p>
                    </motion.div>
                    <motion.div className='flex flex-col gap-4 bg-amber-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' variants={itemVariants} key={2}>  
                        <DesktopIcon size={54} color="#5f504eff" className='bg-[#e1d3abff] rounded-full p-2'/>
                        <h3 className="text-2xl font-[Josefin_sans]">Fullstack Development</h3>
                        <p className='text-gray-600'>Proficient in both frontend and backend technologies, such as React, Angular, Node.js, Docker and Entity Framework.</p>
                    </motion.div>
                    <motion.div className='flex flex-col gap-4 bg-amber-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' variants={itemVariants} key={3}>  
                        <DesignIcon size={54} color="#5f504eff" className='bg-[#e1d3abff] rounded-full p-2'/>
                        <h3 className="text-2xl font-[Josefin_sans]">Interaction Design</h3>
                        <p className='text-gray-600'>Skilled in designing intuitive, user-centered interfaces using Figma. Also a passionate illustrator.</p>
                    </motion.div>
                </div>
            </motion.div>
            <div className="flex w-fill justify-center bg-amber-50 md:p-24 p-8 flex-col gap-8 items-center">
                <div className='max-w-7xl justify-center items-center flex flex-col'>
                    <div className='bg-[#A7956C] inline-block rounded-md mb-12 group py-4'>
                        <h1 className="text-5xl font-[Josefin_sans] text-amber-50 px-8 rounded">Featured work</h1>
                        <AnimatedPath color="#fff" size={180} className='rotate-6'/>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                        {projects.map((project) => (
                            <ProjectCard 
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                onClick={() => navigate(project.link)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg- p-24">
            </div>
        </>
    );
};

export default Home;