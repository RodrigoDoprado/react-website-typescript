import Form from "../../componet/userForm"
import { Helmet } from "react-helmet"
import Navbar from "../../componet/navbar"
import Footer from "../../componet/footer"

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Register</title>
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
