
import { Suspense, useState } from "react"
import Main from "./components/Main/Main"
import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import Stats from "./components/Stats/Stats"

const fetchData = async () => {
  const res = await fetch ("/data.json")
  return res.json();
}



function App() {

  const mainPromise = fetchData();

  const [showCart, setShowCart] = useState("false");


  return (
    <>
    <NavBar />
    <Banner />
    <Stats />
    <Suspense fallback={
<span className="loading loading-spinner loading-xs"></span>}
 >
      <Main mainPromise={mainPromise} />
    </Suspense>

    <button onClick={() => setShowCart(false)} className="btn">Products</button>
    <button onClick={() => setShowCart(true)} className="btn">Cart({CaretPosition.length})</button>

    
    

    </>
  )
}

export default App
