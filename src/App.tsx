import { useContext } from "react"
import Footer from "./componet/footer"
import Navbar from "./componet/navbar"
import { AuthContext } from "./contexts/AuthContexts"
import RouterPage from "./routerPage"

function App() {
  const { loading } = useContext(AuthContext)
  return (
    <>
      {!loading ? (
        <>
          <Navbar />
          <RouterPage />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
