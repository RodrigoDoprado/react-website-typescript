import { Helmet } from "react-helmet"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"

export default function Cart() {
  return (
    <>
      <Helmet>
        <title>Carrinho</title>
      </Helmet>
      <Navbar />
      <h1>Cart</h1>
      <Footer />
    </>
  )
}
