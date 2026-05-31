import { useState } from "react"


// const App = () => {

//   const [num, setNum] = useState(10)
//   function changeNum(){
//     setNum(30) 
//   }
//   return (
//     <div>
//       <h1>Value of num is {num} </h1>
//       <button onClick={changeNum} >Click</button>
//     </div>
//   )
// }

// export default App



const App = () => {

const [user, setUser] = useState('raju')
function changeUser(){
  setUser('Bharat')
}
  return (
    <div>
      <h1>This user is {user} </h1>
      <button onClick={changeUser}>Click</button>
    </div>
  )
}

export default App