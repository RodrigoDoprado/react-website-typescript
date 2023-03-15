import Form from "../../componet/userForm"
import { Helmet } from "react-helmet"

export default function MyDados() {
  return (
    <>
      <Helmet>
        <title>Meus Dados</title>
      </Helmet>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
