import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 justify-between items-center text-xl '>
        <h2 className="text-xl font-bold">Bharat</h2>
        <div className='flex gap-8 '>
            <Link className="text-lg font-bold" to='/' >Home</Link>
            <Link className="text-lg font-bold" to='/about'>About</Link>
            <Link className="text-lg font-bold" to='/product'>Product</Link>

        </div>
    </div>
  )
}

export default Navbar