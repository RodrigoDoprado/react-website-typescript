import { useContext } from "react"
import Footer from "./componet/footer"
import Navbar from "./componet/navbar"
import { AuthContext } from "./contexts/AuthContexts"
import RouterPage from "./routerPage"

function App() {
  const { loading } = useContext(AuthContext)
  if (!loading) {
    return (
      <>
        <Navbar />
        <RouterPage />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <h1></h1>
      </>
    )
  }
}

export default App
