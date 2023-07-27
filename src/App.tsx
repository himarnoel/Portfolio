
import './App.css'
import logo from "../src/assets/logo.png"
function App() {

  return (
    <>
    <div className="container mx-auto">
      <nav className='flex justify-between items-center py-1 '> 
        <img src={logo} alt=""  className='object-contain w-[9rem]'/>
        <div className='flex gap-x-10 font-medium text-[#666666]'>
          <a href="" className="e">Home</a><a href="" className="e">About</a><a href="" className="e">Tech Stack</a><a href="" className="e">Projects</a><a href="" className="e">Contact</a>
        </div>
      </nav>
      </div>
    </>
  )
}

export default App
