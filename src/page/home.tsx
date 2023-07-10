/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet"
import Card from "../componet/card"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"
import { useProductData } from "../hooks/useProductData"

export default function Home() {
  const {data}=useProductData();

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
            {data?.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
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
