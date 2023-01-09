import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {


  return (

    <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] px-3 md:px-16 py-16 md:gap-11 h-screen overflow-x-hidden">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Navbar />

      </div>
    </div>

  )
}

export default App
