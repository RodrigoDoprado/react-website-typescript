/* eslint-disable no-self-assign */
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContexts"

export default function Navbar() {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Items
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Todos Items
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Items Populares
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Novos Items
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Quem Somos
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="btn btn-outline-dark" href="/meucarrinho">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </a>
            </form>
            <ul className="navbar-nav  mb-lg-0 ms-lg-4">
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/login">
                      Sigin in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/register">
                      Sigin up
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/meudados">
                          Configuração
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          href="/"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          {/* <span className="icons">
                  <BsBoxArrowDown className="icon" />
                </span> */}
                          <span className="title">Logout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
