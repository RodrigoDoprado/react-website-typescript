/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Card from "../componet/card"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"
import { useApi } from "../service/api"
import { Product } from "../type/Product"

export default function ViewProduct() {
  const [data, setData] = useState<Product[]>([])
  const [dataProduct, setDataProduct] = useState()
  const [status, setStatus] = useState({ type: "", message: "" })
  const { id } = useParams()

  useEffect(() => {
    allProduct()
    getProduct(id)
  }, [])

  const allProduct = async () => {
    useApi()
      .allPrduct()
      .then((res) => {
        setData(res.data.product)
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

  const getProduct = async (id: string | undefined) => {
    useApi()
      .getPrduct(id)
      .then((res) => {
        setDataProduct(res.product.product)
        // console.log(res)
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
        <title>{dataProduct}</title>
      </Helmet>
      <Navbar />
      {/* <!-- Product section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder">Shop item template</h1>
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
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
            {data &&
              data.map((item) => {
                return (
                  <Card
                    title={item.title}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    category={item.category}
                    caption={item.caption}
                  />
                )
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
