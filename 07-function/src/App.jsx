// const App = () => {
//   function btnClicked(){
// console.log('button is clicked');
//   }
//   function mouseEnter(){
//     console.log('change text');

//   }
//   return (
//     <div>
//       <h1>Hello, Bharat</h1>
//       <button onMouseEnter={mouseEnter} onClick={btnClicked}>change User</button>
//     </div>
//   )
// }

// export default App

// Button click par value print karna ho
let name = "";

const App = () => {
  function inputChnage(e) {
    name = e.target.value;
  }
  function btnClicked() {
    console.log(name);
  }
  return (
    <div className="text">
      <input onChange={inputChnage} type="text" placeholder="Enter Your Name" />

      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
