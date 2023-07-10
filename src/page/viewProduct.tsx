/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"
import { useApi } from "../service/api"

export default function ViewProduct() {
  const initialState = {
    title: "",
    caption: "",
    category: "",
    id: "",
    imageUrl: "",
  }
//   const [data, setData] = useState<Product[]>([])
  const [dataProduct, setDataProduct] = useState(initialState)
  const { title, caption, category, imageUrl } = dataProduct
  const [status, setStatus] = useState({ type: "", message: "" })
  const { id } = useParams()

  useEffect(() => {
    all()
    if (id) {
      get(id)
    }
  }, [])

  const all = async () => {
    useApi()
      .allPrductRelated(category)
      .then(() => {
        // setData(res.data.products)
      })
      .catch((err: { response: { data: { message: any } } }) => {
        if (err.response) {
          setStatus({ type: "error", message: err.response.data.message })
        } else {
          setStatus({
            type: "error",
            message: "A Buca dos Produto não realizada!, Tente mais tarde",
          })
        }
      })
  }

  const get = async (id: string | undefined) => {
    useApi()
      .getProduct(id)
      .then((res) => {
        setDataProduct(res.product)
      })
      .catch((err: { response: { data: { message: any } } }) => {
        if (err.response) {
          setStatus({ type: "error", message: err.response.data.message })
        } else {
          setStatus({
            type: "error",
            message: "A Buca dos Produto não realizada!, Tente mais tarde",
          })
        }
      })
  }

  return (
    <>
      <Helmet>
        <title>
          {title}-{caption}
        </title>
      </Helmet>
      <Navbar />
      {/* <!-- Product section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={imageUrl}
                alt={caption}
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="fw-bolder">{title}</h1>
              <h5 className="fw-bolder">{caption}</h5>
              <h6 className="fw-bolder">{category}</h6>
              <div className="fs-5 mb-5">
                {/* <span className="text-decoration-line-through">$45.00</span>
                <span>$40.00</span> */}
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                />
                {/*style="max-inline-size: 3rem" */}
                <a
                  className="btn btn-outline-dark flex-shrink-0"
                  href="/meucarrinho"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related items section--> */}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Produtos Relacionados</h2>
          <div className="row gx-lg-9 row-cols-3 row-cols-md-3 row-cols-xl-6 justify-content">
            {status.type === "success" ? (
              <p style={{ color: "green" }}>{status.message}</p>
            ) : (
              ""
            )}
            {status.type === "error" ? (
              <p style={{ color: "#ff0000" }}>{status.message}</p>
            ) : (
              ""
            )}
            {/* {data.map((item) => {
                return (
                  <Card
                    title={item.title}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    category={item.category}
                    caption={item.caption}
                  />
                )
              })} */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
