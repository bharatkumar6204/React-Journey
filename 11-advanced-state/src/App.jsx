import { useState } from "react"


// const App = () => {
//   const [num, setNum] = useState([10,20,30,40])
// // arr ke ander change
//   const btnClicked=()=>{
//   const  newNum = [...num]
//   newNum.push(99) 
//   console.log(newNum);
//   setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App
// 


const App = () => {
  const [num, setNum] = useState({user:'bharat',age:23})
  
  const btnClicked=()=>{
    setNum(prev=>({...prev,age:25})) // prev-> purani value

  }


  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>

    </div>
  )
}

export default App