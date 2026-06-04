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

const App = () => {

  const getData = async() => {
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(data);
  };

  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
};

export default App;
