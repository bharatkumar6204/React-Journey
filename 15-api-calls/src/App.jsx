
const App = () => {
 async function GetData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //sonplaceholder free api
   console.log(response);
  }
  return (
    <div>
      <button onClick={GetData}>GetData</button>
    </div>
  )
}

export default App