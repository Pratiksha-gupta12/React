//Babel compiles JSX down to React.createElement() calls.

//In multipage application , there is separate html css and js  corresponding to different pages like cwh about  have different html css and js , cwh contact have different html css and js


// in single page app, there is single html css  and js . and js can manage all the app without loading it again and again


/* Props:
properties 

*/

/*
container is a class of bootstrap which align the textarea in center
*/

import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
   
<Navbar title= "NEWTEXTUTILS" about=" About Us" />

{/* <Navbar  /> */}



<div className="container my-3">
  
<TextForm heading ="Enter the text "/>

</div>


    </>
    

  );
}

export default App;