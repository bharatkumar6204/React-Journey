// const App = () => {
//  async function GetData(){
//   // fatch se
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //sonplaceholder free api
//    console.log(response);
//   }
//   return (
//     <div>
//       <button onClick={GetData}>GetData</button>
//     </div>
//   )
// }

// export default App

//
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([])

  // const getData = async() => {
  //  const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(data);
  // };

  const getData = async() => {
   const response = await axios.get('https://picsum.photos/v2/list')
   setData(response.data)
   
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {data.map(function(e,idx){
          return <h2>{e.author}{idx} </h2>
        })}
      </div>
    </div>
  );
};

export default App;
