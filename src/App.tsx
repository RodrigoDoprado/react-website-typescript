import { useContext } from "react"
import Footer from "./componet/footer"
import Navbar from "./componet/navbar"
import { AuthContext } from "./contexts/AuthContexts"
import RouterPage from "./routerPage"

function App() {
  const {authenticated, loading } = useContext(AuthContext)
  if (!loading) {
if(!authenticated){
    return (
      <>
        <Navbar />
        <RouterPage />
        <Footer />
      </>
    )
}eles{
return (
      <>
        <Navbar />
        <RouterPage />
        <Footer />
      </>
    )
}
  } else {
    return (
      <>
      </>
    )
  }
}

export default App
