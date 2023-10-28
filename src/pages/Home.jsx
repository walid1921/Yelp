import Categories from "./Categories"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Restaurant from "./Restaurant"

function Home({object}) {
  return (
    <div>
      <Header />

      <main className=" container mx-auto">
        <Restaurant object={object}/>
        
        <Categories />
        <Footer />
      </main>

    </div>
  )
}

export default Home
