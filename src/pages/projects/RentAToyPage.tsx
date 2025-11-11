import ProjectDetails from "../../components/ProjectDetails";
import rentimg from '../../assets/images/mobile.png';
import backgroundimg from '../../assets/images/background.png';
import ProjectLink from "../../components/ProjectLink";

const RentAToyPage: React.FC = () => {
    const imageModules = import.meta.glob("/src/assets/images/rent/rent-a-toy*.{png,jpg,jpeg,webp}", { eager: true });

    interface ImageModule {
    default: string;
    }
  const presentationImages = Object.entries(imageModules)
    .map(([path, mod]) => ({
      path,
      src: (mod as ImageModule).default,
    }))
    .sort((a, b) => {
      const numA = parseInt(a.path.match(/rent-a-toy(\d+)\.\w+$/)?.[1] || "0");
      const numB = parseInt(b.path.match(/rent-a-toy(\d+)\.\w+$/)?.[1] || "0");
      return numA - numB;
    });

    const details = {
        title: "Rent a Toy",
        subtitle: "A Toy Rental App Design",
        description: "This project was created as part of a home exam for a mobile development course. The task was to design a toy rental app prototype in Figma, focusing on following the material design guidelines and principles. The design emphasizes ease of use, with intuitive navigation and a visually appealing interface.",
        categories: ["Mobile development", "UI/UX Design"],
        team: ["Hanna Adenholm"],
        year: "2024",
        technologies: ["Figma", "UX Design"],
        img: rentimg,
        figma: "https://www.figma.com/design/lzK6fGVm5oPv1O794tsINy/Home-exam-Moblie?node-id=0-1&t=q6gRwRsWEqXCMR6a-1"
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="flex flex-col gap-8 max-w-5xl mx-auto py-24">
                 {presentationImages.map((img, index) => (
                    <img key={index} src={img.src} alt={`Presentation ${index + 1}`} />
                ))}
            </div>

            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12 px-4">
                <ProjectLink link ="/projects/quack-tales" name="Quack Tales" next={false} />
                <ProjectLink link="/projects/cohort-manager" name="Cohort Manager" next={true} />
            </div>
        </div>
    );
}
export default RentAToyPage;