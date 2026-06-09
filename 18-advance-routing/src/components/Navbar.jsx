

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 justify-between items-center text-xl '>
        <h2 className="text-xl font-bold">Bharat</h2>
        <div className='flex gap-8 '>
            <a className="text-lg font-bold" href="/">Home</a>
            <a className="text-lg font-bold" href="/about">About</a>
            <a className="text-lg font-bold" href="/product">Product</a>
        </div>
    </div>
  )
}

export default Navbar