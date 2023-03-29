/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Card from "../componet/card"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"
import { useApi } from "../service/api"
import { Product } from "../type/Product"

export default function Home() {
  const [data, setData] = useState<Product[]>([])
  const [status, setStatus] = useState({ type: "", message: "" })

  useEffect(() => {
    useApi()
      .allPrduct()
      .then((res) => {
        setData(res.data.products)
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
  }, [])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5">
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
