
import React from "react";
import './../styles/App.css';

const App = () => {
  const[clickedBtn, setClickedBtn]=useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked {clickedBtn} times</p>
    <button onClick={()=> setClickedBtn(clickedBtn+1)}>Click me</button>
    </div>
  )
}

export default App
