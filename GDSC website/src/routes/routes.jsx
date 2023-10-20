import React from 'react'
import {Route,Routes} from 'react-router-dom';
import OurTeams from '../Components/OurTeams';
import TeamCard from '../Components/TeamCard';

import Lander from '../Pages/Lander';
// import ProjectPage from '../Components/ProjectPage';
import Newsletterpage from '../Pages/Newsletterpage';
import TopStories from '../Components/TopStories'
import TopStoriesCarousel from '../Components/TopStoriesCarousel';


import MemberList from '../Pages/MemberList';
function routes() {
  return (
    
     <Routes>
      <Route path='/' element={<Lander/>} />
      <Route path='/newsletter/:id' element={< TopStories/>} />
      <Route path='/newsletter' element={<Newsletterpage/>} />
      <Route path='/newsletter/carousel' element={< TopStoriesCarousel/>} />
    

    
      {/* <Route path='/project' element= {<ProjectPage/>}/> */}
      {/* <Route path='/our-teams' element = {<OurTeams/>}/> */}
      <Route path='/Members/:id' element={<MemberList/>}/>
      <Route path='/teams/:id' element={<TeamCard/>}/>

     </Routes>

  )
}

export default routes;
