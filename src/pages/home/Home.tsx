import React from 'react';
import image from '../../assets/images/dog.png';
import me from '../../assets/images/me.jpg';
import Experiences from './Experiences';
import '../../styles/float.css';

const Home: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row">
                <h1 className="pt-12 md:text-8xl text-6xl font-[Josefin_sans] text-amber-50 md:w-3xl w-96">HANNA ADENHOLM</h1>
                <img src={image} alt="dog" className="lg:w-2xl w-3/4 animate-float"/>
            </div>
            <div className="flex w-fill justify-center bg-amber-50 p-24 flex-col gap-8">
                <h1 className="text-5xl font-[Josefin_sans] text-amber-900">Who am I?</h1>
                
                
                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className='flex flex-col gap-4 mb-8'>
                    <p>
                A passionate fullstack developer and software engineer with an interest for UX and user-friendly design!
                </p>
                <img src={me} alt="" className="w-72 rounded-full"/>
                        <h2 className="text-4xl font-[Josefin_sans] text-amber-900">Education </h2>
                        <Experiences experience={{ 
                            title: "Master of Science in Engineering, MSE", 
                            date: "sep 2020 - jun 2025", 
                            company: "Chalmers University of Technology",
                            descriptions: [] 
                                }} />
                        <Experiences experience={{ 
                            title: "Interaction design, MSc", 
                            date: "sep 2023 – jun 2025", 
                            company: "Chalmers University of Technology",
                            descriptions: [] 
                                }} />
                        <Experiences experience={{ 
                            title: "Software Engineering, BSc", 
                            date: "sep 2020 – jun 2023", 
                            company: "Chalmers University of Technology",
                            descriptions: [] 
                                }} />   
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-4xl font-[Josefin_sans] text-amber-900">Employment History</h2>
                        <Experiences experience={{ 
                            title: "Summer worker - framework development for testing", 
                            date: "jun 2023 – jul 2023", 
                            company: "Volvo Group",
                            descriptions: [
                                "Collaborated in a multicultural team to develop a testing framework in python",
                                "Worked using the agile framework with daily scrum meetings"
                            ] 
                                }} />
                        <Experiences experience={{
                            title: "Teacher assistant - Basic computer technology", 
                            date: "aug 2021 – dec 2021", 
                            company: "Chalmers University",
                            descriptions: [
                                "Motivated and coached students through their problem-solving process",
                                "Provided support to the teacher",
                                "Collaborated with other teaching assistants"
                            ] 
                                }} />
                        <Experiences experience={{
                            title: "Park maintenance - summer substitute", 
                            date: "2018 – 2020", 
                            company: "Ronneby Municipality",
                            descriptions: [
                                "Worked in a team to maintain the municipalities greenery",
                                "Answered questions from passing tourists"
                            ] 
                                }} />
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-4xl font-[Josefin_sans] text-amber-900">Extra-curricular activities</h2>
                        <Experiences experience={{
                            title: "Cloudlords, manager of student division premises - PR", 
                            date: "oct 2023 – sep 2024", 
                            company: "Chalmers",
                            descriptions: [
                                "Responsible for creating our visual identity, logo and posters for events",
                                "Improved and managed the IT divisions premises on Lindholmen"
                            ] 
                                }} />
                        <Experiences experience={{
                            title: "IT Student Division Board – Secretary", 
                            date: "jul 2022 – jun 2023", 
                            company: "Chalmers",
                            descriptions: [
                                "Collaborating in a team of seven to handle issues and conflicts having arised",
                                "Responsible for writing protocols during meetings with over 100 attendees",
                                "Organizing and updating the student divisions documents"
                            ] 
                                }} />
                        <Experiences experience={{
                            title: "Board member of Board gaming club DrawIT", 
                            date: "mar 2022 – mar 2023", 
                            company: "Chalmers",
                            descriptions: [
                                "Responsible for maintaining and buying new games",
                                "Organized weekly board game nights"
                            ] 
                                }} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg- p-24">

            </div>
        </>
    );
};

export default Home;