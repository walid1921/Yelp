import Footer from "../components/Footer"
import Header from "../components/Header"
import Restaurant from "./Restaurant"

function Home() {
  return (
    <div>
      <Header />

      <main className=" container mx-auto">
        <Restaurant />
        <Footer />
      </main>

    </div>
  )
}

export default Home
