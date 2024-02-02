const Maincomp = ({handlechange , handletodo}) =>{
  return(
    <div className='todo'>
    <h1>TODO - LIST</h1>
    <div className='inputcontain'>
      <input type='text' onChange={handlechange}/>
      <button onClick={handletodo}>Add</button>
    </div>
  </div>
  )
}

export default Maincomp