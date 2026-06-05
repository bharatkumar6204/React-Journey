// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
// console.log('use effect is running ');

//   },[num])

//   return (
//     <div>
//       <h2>num {num}</h2>
//       <h2>num2 {num2}</h2>

//       <button
//       onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10)
//       }}
//       >
//       Click</button>

//     </div>
//   )
// }

// export default App

// ***********
import React, { useEffect, useState } from 'react'


const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A ki value change ho gayi');
    
  }

  function bChanging(){
    console.log('B ki value change ho gayi');
    
  }
  useEffect(function(){
    console.log('useEffect is running...');
    
  })

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >Change B</button>
    </div>
  )
}

export default App