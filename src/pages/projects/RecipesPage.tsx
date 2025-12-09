import recipeimg from '../../assets/images/recipe.png';
import backgroundimg from '../../assets/images/background.png';
import ProjectDetails from '../../components/ProjectDetails';
import ProjectLink from '../../components/ProjectLink';

const RecipesPage: React.FC = () => {
    const details = {
        title: "Recipes",
        subtitle: "A Recipe Management Application",
        description: "I developed this recipe application as a way to familiarize myself more with .NET backend development and containerization with Docker. The application allows users to create an account, log in, and manage their personal collection of recipes. Users can add new recipes, edit existing ones, and delete recipes they no longer need. I developed it because me and my partner needed a way to easily share and organize our favorite recipes in one place.",
        categories: ["Web Development", "UI/UX Design"],
        team: ["Hanna Adenholm"],
        year: "2025",
        technologies: ["React", "TypeScript", ".NET", "PostgreSQL", "Entity Framework", "Docker", "Git workflows", "Responsive Design"],
        img: recipeimg,
        github: "https://github.com/Adenholm/heap-recipes",
        website: "http://recipes.erik-persson.com/"
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>
            
            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12">
                <ProjectLink link="/projects/flower" name="Flower" next={false} />
                <ProjectLink link="/projects/rent-a-toy" name="Rent a Toy" next={true} />
            </div>
        </div>
    );
}
export default RecipesPage;