import React from 'react'
import CustomRoutes from './routes/CustomRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 style={{"textAlign": "center","textDecoration":'underline', "fontSize":"50px", "color":"blue"}}> <Link to={"/"}>Pokemons</Link></h1> 
      <CustomRoutes/>
    </div>
  );
}

export default App;
