import Form from "../../componet/userForm"
import { Helmet } from "react-helmet"
import Navbar from "../../componet/navbar"
import Footer from "../../componet/footer"

export default function MyDados() {
  return (
    <>
      <Helmet>
        <title>Meus Dados</title>
      </Helmet>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
