/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";


const Tsk = ({task , remfun , completeditm}) =>{
  

  return(
    <div className='todoitem' style={{backgroundColor : task.completed && '#03C988' }}>
    {task.value} 
    <div className="icons">
    <TiTick className='tick' onClick={() => completeditm(task.id)}/> 
    <ImCross className='cross' onClick={()=> remfun(task.id)}/>
    </div>
</div>
  )
}

export default Tsk;

