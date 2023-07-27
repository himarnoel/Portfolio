
import './App.css'
import logo from "../src/assets/logo.png"
function App() {

  return (
    <>
    <div className="container  bg-red-200 mx-auto">
      <nav className='flex justify-between items-center py-4'> 
        <img src={logo} alt=""  className='object-contain w-[11rem]'/>
        <div className='flex gap-x-20 font-medium text-[#666666]'>
          <a href="" className="e">Home</a><a href="" className="e">About</a><a href="" className="e">Tech Stack</a><a href="" className="e">Projects</a><a href="" className="e">Contact</a>
        </div>
      </nav>
      </div>
    </>
  )
}

export default App
