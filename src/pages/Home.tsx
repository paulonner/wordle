import Header from "../components/Header"
import WordlePanel from "../components/WordlePanel"

const Home = () => {
  return (
    <div className="w-full flex flex-col py-10 px-5">
      <Header />
      <WordlePanel />
    </div>
  )
}

export default Home