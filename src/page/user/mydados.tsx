import Footer from "../../componet/footer"
import Form from "../../componet/userForm"
import Navbar from "../../componet/navbar"

export default function MyDados() {
  return (
    <>
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
