import Categories from "./Categories"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Restaurant from "./Restaurant"


function Home({ data }) {
  return (
    <div>
      
      <Header />

      <main className=" container mx-auto">

        <h2 className="text-center text-3xl font-bold mt-10">Yelp News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {data.map((restaurant, index) => (
            <Restaurant key={index} restaurant={restaurant} />
          ))}
        </div>

        <Categories />
        <Footer />
      </main>

    </div>
  )
}

export default Home
