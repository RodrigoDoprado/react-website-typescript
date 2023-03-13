export default function Form() {
  return (
    <div className="card bg-light text-dark">
      {/*style="border-radius: 1rem;" */}
      <div className="card-body p-5 text-center">
        <div className="mb-md-5 mt-md-4 pb-5">
          <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
          <p className="text-dark-50 mb-5">
            Please enter your login and password!
          </p>
          <form>
            <div className="form-outline form-dark mb-4">
              <input
                type="email"
                id="typeEmailX"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX">
                Nome
              </label>
            </div>
            <div className="form-outline form-dark mb-4">
              <input
                type="email"
                id="typeEmailX"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX">
                Sobre Nome
              </label>
            </div>
            <div className="form-outline form-dark mb-4">
              <input
                type="email"
                id="typeEmailX"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX">
                Telefone
              </label>
            </div>
            <div className="form-outline form-dark mb-4">
              <input
                type="email"
                id="typeEmailX"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX">
                Email
              </label>
            </div>

            <div className="form-outline form-dark mb-4">
              <input
                type="password"
                id="typePasswordX"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typePasswordX">
                Password
              </label>
            </div>

            <button className="btn btn-outline-dark btn-lg px-5" type="submit">
              Enviar
            </button>
          </form>
          <div className="d-flex justify-content-center text-center mt-2 pt-1">
            <a href="#!" className="text-dark">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#!" className="text-dark">
              <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
            </a>
            <a href="#!" className="text-dark">
              <i className="fab fa-google fa-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-0">
            Don't have an account?
            <a href="/auth/login" className="text-dark-50 fw-bold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
