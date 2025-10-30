import backgroundimg from '../../assets/images/background.png';
import mockup from '../../assets/images/flower/mockup.png';
import ProjectDetails from '../../components/ProjectDetails';

const FlowerPage: React.FC = () => {
    const imageModules = import.meta.glob("/src/assets/images/flower/flower*.{png,jpg,jpeg,webp}", { eager: true });

    interface ImageModule {
    default: string;
    }
  const flowerImages = Object.entries(imageModules)
    .map(([path, mod]) => ({
      path,
      src: (mod as ImageModule).default,
    }))
    .sort((a, b) => {
      const numA = parseInt(a.path.match(/flower(\d+)\.\w+$/)?.[1] || "0");
      const numB = parseInt(b.path.match(/flower(\d+)\.\w+$/)?.[1] || "0");
      return numA - numB;
    });

    const details = {
        title: "Flower",
        subtitle: "A Visualization Tool for Reflecting on Smartphone Use",
        description: "This project was one of the most fun ones I’ve done. It was done as part of my master thesis and focuses on the concept of gaining insight into ones screen use. Instead of shaming the user for the amount of time they spend in front of their screen we wanted to raise awareness and motivate the user to form healthier habits.",
        categories: ["Android app development", "Interaction design"],
        team: ["Hanna Adenholm", "Stina Hansson"],
        year: "2025",
        technologies: ["Kotlin", "SQLite", "Jetpack Compose"],
        img: mockup
    }

    return (
        <>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="flex flex-col gap-8 max-w-5xl mx-auto py-24">
                 {flowerImages.map((img, index) => (
                    <img key={index} src={img.src} alt={`Flower ${index + 1}`} />
                ))}
            </div>
            <div className="flex w-fill justify-between max-w-5xl mx-auto pb-12 px-4">
                <a href="/projects/rent-a-toy" className='text-white text-lg'>Previous project: Rent a Toy</a>
                <a href="/projects/cohort-manager" className='text-white text-lg'>Next project: Cohort Manager</a>
            </div>
        </>
    )
}

export default FlowerPage;