
import Footers from "./components/footer/Footer"
import Navbars from "./components/header/Navbar"
import Main from "./components/main/Main"


function App() {
  

  return (
    <>

      <header className="w-full pb-4 mt-4 sticky top-0 my-6 bg-slate-50 border-b1 border-purple-50">
          <Navbars></Navbars>
      </header>

      
      <Main></Main>

      <footer className="w-[95%] md:w-[90%] mx-auto mt-4">
        <Footers></Footers>
      </footer>
      

    </>
  )
}

export default App
