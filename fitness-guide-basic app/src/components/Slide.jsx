import { useState } from "react";

const Slide = ({slides}) => {
  let [index , updtindex] = useState(0)
  
  
  
  const restart = () =>{
    updtindex(0)
  }
  const previous = () =>{
    updtindex((i) => i-1)
  }
  const next = () =>{
    updtindex((i) => i+1)
   }
  return(
  <div className="container">
    <div className="navigation">
      <button className="restart" disabled = {index === 0} onClick={restart}>Restart</button>
      <button className="btn" disabled = {index === 0} onClick={previous}>Prev</button>
      <button className="btn" disabled = {index === slides.length-1} onClick={next}>Next</button>
    </div>
    <div className="slides">
      <h1>{slides[index].title}</h1>
      <p>{slides[index].text}</p>
    </div>
  </div>
  )
};

export default Slide