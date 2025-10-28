
import image from '../../assets/images/dog.png';
import '../../styles/float.css';
import ProjectCard from '../../components/ProjectCard';
import flowerimg from '../../assets/images/flower.png';
import recipeimg from '../../assets/images/recipe.png';
import mobileimg from '../../assets/images/mobile.png';
import quacktalesimg from '../../assets/images/quacktales.gif';
import ScrollingBg from '../../components/ScrollingBg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <ScrollingBg/>
            <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:px-48">
                <div className= "xl:w-3xl lg:w-100 w-96">
                    <h1 className="xl:text-8xl lg:text-7xl md:text-8xl text-6xl font-[Josefin_sans] text-amber-50 xl:w-3xl w-96">HANNA ADENHOLM</h1>
                    <h2 className="xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-[Josefin_sans] text-amber-100 mt-4 md:w-3xl w-96">Software Developer & Designer</h2>
                </div>

                <img src={image} alt="dog" className="xl:w-2xl lg:w-xl w-3/4 animate-float"/>
            </div>
            <div className="flex w-fill justify-center bg-amber-50 p-24 flex-col gap-8 items-center">
                <div className='max-w-7xl justify-center'>
                    <h1 className="text-5xl font-[Josefin_sans] text-amber-900 mb-4">My work</h1>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                        <ProjectCard 
                            title="Flower"
                            description="A unique screen use visualization app"
                            technologies="Kotlin | Jetpack Compose | SQLite"
                            image={flowerimg}
                            onClick={() => navigate('/projects/flower')}
                        />
                        <ProjectCard 
                            title="Recipes"
                            description="Recipe sharing web application with user authentication and CRUD functionality."
                            technologies="React | .NET | PostgreSQL"
                            image={recipeimg}
                            onClick={() => navigate('/projects/recipes')}
                        />
                        <ProjectCard 
                            title="Rent a Toy"
                            description="A mobile app prototype made in Figma. Focus on user-friendly design and UX principles."
                            technologies="Figma | UX Design"
                            image={mobileimg}
                            onClick={() => navigate('/projects/rent-a-toy')}
                        />
                        <ProjectCard 
                            title="Quack Tales"
                            description="A cooperative multiplayer game made in Unity."
                            technologies="Unity | C# | Procreate"
                            image={quacktalesimg}
                            onClick={() => navigate('/projects/quack-tales')}
                        />
                        <ProjectCard 
                            title="Cohort Manager"
                            description="A mobile app prototype made in Figma. Focus on user-friendly design and UX principles."
                            technologies="Java | Spring Boot | React"
                            image={mobileimg}
                            onClick={() => navigate('/projects/cohort-manager')}
                        />
                        <ProjectCard 
                            title="Nestify"
                            description="A bird and insect hotel blueprint sharing app."
                            technologies="Flutter | Firebase | Dart"
                            image={recipeimg}
                            onClick={() => navigate('/projects/nestify')}
                        />
                        <ProjectCard 
                            title="Hive for mobile"
                            description="A mobile adaption of the board game hive."
                            technologies="Java | JavaFX | OOP"
                            image={recipeimg}
                            onClick={() => navigate('/projects/hive-for-mobile')}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg- p-24">
            </div>
        </>
    );
};

export default Home;