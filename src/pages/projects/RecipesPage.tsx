import recipeimg from '../../assets/images/recipe.png';
import backgroundimg from '../../assets/images/background.png';
import ProjectDetails from '../../components/ProjectDetails';

const RecipesPage: React.FC = () => {
    const details = {
        title: "Recipes",
        subtitle: "A Recipe Management Application",
        description: "I developed this recipe application as a way to familiarize myself more with .NET backend development and containerization with Docker. The application allows users to create an account, log in, and manage their personal collection of recipes. Users can add new recipes, edit existing ones, and delete recipes they no longer need. I developed it because me and my partner needed a way to easily share and organize our favorite recipes in one place.",
        categories: ["Web Development", "UI/UX Design"],
        team: ["Hanna Adenholm"],
        year: "2025",
        technologies: ["React", "TypeScript", ".NET", "PostgreSQL", "Entity Framework", "Docker", "Git workflows"],
        img: recipeimg
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>
            <div className="flex w-fill justify-between max-w-5xl mx-auto pb-12">
                <a href="/projects/rent-a-toy" className='text-white text-lg'>Previous project: Rent a Toy</a>
                <a href="/projects/cohort-manager" className='text-white text-lg'>Next project: Cohort Manager</a>
            </div>
        </div>
    );
}
export default RecipesPage;