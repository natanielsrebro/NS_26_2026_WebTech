import Counter from './components/Counter';
import { useState } from "react";
import Visible from './components/Visible';
import Technology from './components/Likes';

function App(){

  return (
    <>
      <Counter/>
      <Visible/>
      <br></br>
      <Technology/>
      </>
  );
  
  
};

export default App;