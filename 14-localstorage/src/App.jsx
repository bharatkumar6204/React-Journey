
const App = () => {
  // localStorage.clear()
// localStorage.setItem('age','23')

// const user = localStorage.getItem('user')
// const age = localStorage.getItem('age')
// console.log(age,user);
// localStorage.removeItem('age')

// const user = {
//   username:'bhrat',
//   age : 23,
//   city : 'patna',
//   course : 'python'
// }
// localStorage.setItem('user',JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))
console.log(user);

  return (
    <div>App
    </div>
  )
}

export default App