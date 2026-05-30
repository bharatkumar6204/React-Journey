
const App = () => {
  function btnClicked(){
console.log('button is clicked');
  }
  function mouseEnter(){
    console.log('change text');
    
  }
  return (
    <div>
      <h1>Hello, Bharat</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>change User</button>
    </div>
  )
}

export default App