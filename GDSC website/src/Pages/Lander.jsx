import React from "react";
import OurTeams from '../Components/OurTeams';
import Newsletter from "../Components/Newsletter";
import Footer from '../Components/Footer';
import MainMemberCard from "../Components/MainMemberCard";
import AchievementsBanner from '../Components/AchievementsBanner';
import Events from '../Components/Events';
import HomePage from '../Components/HomePage';
import ProjectPage from "../Components/ProjectPage";
import Navbar from "../Components/Navbar";

const Lander = () => {
  return (
    <>
        <HomePage />
        <ProjectPage />
        <MainMemberCard/>
        <OurTeams/>
        <Events/>
        <Newsletter />
        <AchievementsBanner />
        <Footer />
    </>
  );
};

export default Lander;
