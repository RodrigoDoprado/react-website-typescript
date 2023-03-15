import { Helmet } from "react-helmet"

export default function ForgotPassword() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <div className="card bg-light text-dark">
                {/*style="border-radius: 1rem;" */}
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Forgot Password
                    </h2>
                    <p className="text-dark-50 mb-5">
                      Prencha o campo com seu email!
                    </p>
                    <form>
                      <div className="form-outline form-dark mb-4">
                        {/* <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label> */}
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <button
                        className="btn btn-outline-dark btn-lg px-5"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
