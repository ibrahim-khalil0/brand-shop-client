import { Outlet } from "react-router-dom"
import Header from "./sharedComponents/Header/Header"
import Footer from "./sharedComponents/Footer/Footer"


function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
