import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import useDarkmode from "./components/utillity/useDarkmode"

function App() {
  const [theme, toggleTheme] = useDarkmode()

  if(theme === 'dark'){
    document.body.style.backgroundColor='#2b2b2b';
  } else {
    document.body.style.backgroundColor='#f3f7ff';

  }


  return (

    <div

    >
    <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] px-3 md:px-16 py-16 md:gap-11   h-screen overflow-x-hidden">
      <div className="">
        <Sidebar theme={theme}/>
      </div>
      <div className="">
        <Navbar theme={theme} toggleTheme={toggleTheme}/>

      </div>
    </div>
    </div>
  )
}

export default App
